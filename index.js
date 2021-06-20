const express = require("express")
const usersRoutes = require("./api/users/routes")

const app = express()

app.use(express.json()) // => req.body

app.use(express.urlencoded());


app.use("/api/v1/users", usersRoutes);

app.listen(3000, () => {
    console.log("server running on 3000")
})