const functions = require('firebase-functions');
const express = require('express');
var cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json())

let videos = []


app.get("/videos", (req,res) => {
    res.send(videos);
})

app.post("/videos", (req,res) => {
    console.log(JSON.stringify(req.body))
    videos.push(req.body.link)
    res.send(videos);
})

app.delete("/videos", (req,res) => {
    videos = []
    res.send(videos);
})

exports.api = functions.https.onRequest(app);