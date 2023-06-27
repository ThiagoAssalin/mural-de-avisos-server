const express = require("express");
const posts = require("../model/posts");
const cors = require('cors')
const router  = express.Router()

const options = {
    origin: "http//:localhost:3000"
}
router.use(cors())
router.use(express.json()) 
router.get("/all", (req, res) => {
    res.json(JSON.stringify(posts.getAll()))
});


router.post("/new",  (req, res) => {

    let title = req.body.title;
    let description = req.body.description
    posts.newPost(title,description)
    res.send("post adicionado")
});


router.delete("/del/:id",(req,res)=>{
    let id = req.params.id
    posts.deletePost(id)
    res.send(console.log(id))
})

module.exports = router