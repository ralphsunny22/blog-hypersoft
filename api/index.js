import express from "express"
import bodyParser from "body-parser"
import postRoutes from "./routes/posts.js"

const app = express();

app.use(express.json()) //so dat we can send data to our db
//app.use(bodyParser.json) 

app.use("/api/posts", postRoutes)

const port = 5000;
app.listen(port, ()=>{
    console.log(`Server started on port ${port}`);
})