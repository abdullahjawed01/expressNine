import express from "express"
import dotenv from "dotenv"
dotenv.config()

const app = express()
app.use(express.json())
const PORT = process.env.PORT



// Method: get
// Route: / 

app.get("/", (req, res) => {
    try {
        res.status(200).json({ msg: "hello this is cfi batch" })


    } catch (error) {
        console.log(error);
        res.status(404).json({ msg: error })
    }
})

//req.body

app.post("/register", (req, res) => {
    try {
        let UserDetails = req.body
        console.log(UserDetails);
        res.status(200).json({ UserDetails })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error })
    }
})


// req.params


app.post("/students/:person", (req, res) => {
    try {
        let UserDetails = req.params.person
        console.log(UserDetails);
        res.status(200).json({ UserDetails })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error })
    }
})


// req.query

app.post("/user", (req, res) => {
    try {
        let UserDetails = req.query
        console.log(UserDetails);
        res.status(200).json({ UserDetails })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error })
    }
})

//req.params

app.post("/school/:roll", (req, res) => {
    try {
        let UserDetails = req.params.roll
        console.log(UserDetails);
        res.status(200).json({ msg: `This api is for ${UserDetails}th rollnumber student` })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error })
    }
})



app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});





