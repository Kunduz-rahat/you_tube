const express = require("express")
const app = express()
const mongoose = require("mongoose")
const config = require("config")
const PORT = config.get("port")

async function start() {
    try {
        await mongoose.connect(config.get('mongoURL'), {

        })
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}`))
    } catch (e) {
        console.log("Server error", e.message)
        process.exit(1)
    }
}

start()

