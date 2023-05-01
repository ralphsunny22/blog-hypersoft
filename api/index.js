import express from "express"

const app = express();

app.use(express.json) //so dat we can send data to our db

app.listen(8000, ()=>{
    console.log("Connected!")
})