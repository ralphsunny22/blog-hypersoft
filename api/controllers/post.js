import { db } from "../db.js";
import jwt from "jsonwebtoken"

export const getAllPosts = (req,res)=>{
    const q = req.query.cat
        ? "SELECT * FROM posts WHERE cat=?"
        : "SELECT * FROM posts";

        console.log('Cookies: ', req.cookies)

    db.query(q, [req.query.cat], (err,data)=>{
        if(err) return res.status(500).json(err)

        return res.status(200).json(data);
    })
    //return res.status(200).json('kk')
    
};

export const getSinglePost = (req,res)=>{
    const q = "SELECT p.id, `username`, `title`, `desc`, p.img, u.img AS userImg, `cat`, `date` FROM users u JOIN posts p ON u.id=p.uid WHERE p.id = ?";

    db.query(q, [req.params.id], (err,data)=>{
        if(err) return res.status(500).json(err)
        return res.status(200).json(data[0]);
    })
};

export const addPost = (req,res)=>{
    const token = req.header('Authorization').replace('Bearer ', '');
    if(!token) return res.status(500).json("Unauthorised Process")

    jwt.verify(token, "jwtKey", (err, userInfo)=>{
        if(err) return res.status(403).json("Invalid Token")

        //insert query
        const q = "INSERT INTO posts(`title`,`desc`,`img`,`date`,`uid`,`cat`) VALUES (?)"
        const values = [
            req.body.title,
            req.body.desc,
            req.body.img,
            req.body.date,
            userInfo.id,
            req.body.cat, 
        ]
        db.query(q, [values], (err,data)=>{
            if(err) return res.json(err)
            return res.status(200).json("Post created successfuly")
        })
    })
}

export const deletePost = (req,res)=>{
    //const token = req.cookies.access_token
    const token = req.header('Authorization').replace('Bearer ', '');
    
    if(!token) return res.status(500).json("Unauthorised Process")

    jwt.verify(token, "jwtKey", (err, userInfo)=>{
        if(err) return res.status(403).json("Invalid Token")
        
        const postId = req.params.id

        const q = "DELETE FROM posts WHERE `id` = ? AND `uid` = ?"
        
        db.query(q, [postId, userInfo.id], (err,data)=>{
            if(err) return res.status(403).json("You cannot perform this action")
    
            return res.status(200).json("Post Deleted Successfully");
        })
    })

}

export const updatePost = (req,res)=>{
    const token = req.header('Authorization').replace('Bearer ', '');
    if(!token) return res.status(500).json("Unauthorised Process")

    jwt.verify(token, "jwtKey", (err, userInfo)=>{
        if(err) return res.status(403).json("Invalid Token")

        const postId = req.params.id
        //insert query
        const q = "UPDATE posts SET `title`=?,`desc`=?,`img`=?,`cat`=? WHERE `id` = ? AND `uid` = ?"
        const values = [
            req.body.title,
            req.body.desc,
            req.body.img,
            req.body.cat, 
        ]
        db.query(q, [...values, postId, userInfo.id], (err,data)=>{
            if(err) return res.json(err)
            return res.status(200).json("Post Updated Successfuly")
        })
    })
}