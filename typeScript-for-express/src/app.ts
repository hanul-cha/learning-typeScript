import express from "express"

const app = express()

app.get('/' (req:express.request, res, next) => {
    res.send("hello")
})