const express = require("express");
const router = express.Router();

//CRUD
router 
    .get("/",(req,res) => res.send("get all project"))
    .post("/")
    .delete("/:id")
    .post("/:id")
module.exports = router;