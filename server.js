const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const user = require("./model/user") 


mongoose
	.connect("mongodb://localhost:27017/acmedb", { useNewUrlParser: true })
	.then(() => {
		const app = express()
		app.use(express.json()) 
		app.use("/api", routes)

		app.listen(5000, () => {
			console.log("Server has started!")
		})
	})
    // route1
    router.get("/posts/:id", async (req, res) => {
        const post = await Post.findOne({ _id: req.params.id })
        res.send(post)
    })

    // route 2
    router.get("/posts/:id", async (req, res) => {
        try {
            const post = await Post.findOne({ _id: req.params.id })
            res.send(post)
        } catch {
            res.status(404)
            res.send({ error: "Post doesn't exist!" })
        }
    })

    // route3
    router.patch("/posts/:id", async (req, res) => {
        try {
            const post = await Post.findOne({ _id: req.params.id })
    
            if (req.body.title) {
                post.title = req.body.title
            }
    
            if (req.body.content) {
                post.content = req.body.content
            }
    
            await post.save()
            res.send(post)
        } catch {
            res.status(404)
            res.send({ error: "Post doesn't exist!" })
        }
    })

    // route4
    router.delete("/posts/:id", async (req, res) => {
        try {
            await Post.deleteOne({ _id: req.params.id })
            res.status(204).send()
        } catch {
            res.status(404)
            res.send({ error: "Post doesn't exist!" })
        }
    })
