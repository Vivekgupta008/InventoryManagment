const express = require("express")
const app = express()
const cors = require("cors")

require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(express.json())
app.use(cors());

const connectWithDb = require("./config/database")
connectWithDb()

const user = require("./routes/user")

app.use("/api/v1",user)

app.listen(PORT,()=>{
    console.log(`Port is running at ${PORT}`);
})

