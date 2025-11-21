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

//Method: POST
// Route : /create


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





//Method: PUT
// Route : /Updating

app.put("/change", (req, res) => {
    try {
        let hello1 = req.body
        console.log(hello1);
        res.status(200).json({ hello1 })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error })

    }
})


//Method : Delete
//route: /Delete

app.delete("/delete", (req, res) => {
    try {
        let user = req.body;
        console.log(user);
        res.status(200).json({ user })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error })
    }
})




app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

