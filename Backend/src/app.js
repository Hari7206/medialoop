const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const authrouter = require("./routes/auth.route")
const postRouter = require("./routes/post.route")
const userRouter = require("./routes/user.route")

const app = express()




app.use(express.json())
app.use(cors({
    credentials: true,
  origin: "http://localhost:5173"
}))
app.use(cookieParser())
app.use("/api/auth" , authrouter)
app.use("/api/posts" , postRouter)
app.use("/api/users" , userRouter)




module.exports = app