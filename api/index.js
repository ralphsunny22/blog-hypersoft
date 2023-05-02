import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import postRoutes from "./routes/posts.js"
import cookieParser from "cookie-parser"

const app = express();

app.use(express.json()) //so dat we can send data to our db
app.use(cookieParser());
app.use(cors());


app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)

const port = 5000;
app.listen(port, ()=>{
    console.log(`Server started on port ${port}`);
})