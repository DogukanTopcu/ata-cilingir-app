import express from "express";
import axios from 'axios'

const app = express()

app.use(express.static("View"))
axios.get("http://localhost:3000/").then(responce => console.log(responce.data))

app.listen(5000, () => {
    console.log("Started on PORT 5000")
});
