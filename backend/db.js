const mongoose = require("mongoose")

async function dbconnect() {
    // database connection
    mongoose.connect("mongodb+srv://munazzaismail3:munazza431@cluster0.a7eix2s.mongodb.net/project share")
    // mongoose.connect("mongodb://localhost:27017")
}
module.exports = dbconnect