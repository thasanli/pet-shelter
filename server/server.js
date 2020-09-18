
const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;
const db_name = 'petShelterDB'

app.use(express.json());
app.use(cors());

require("./config/mongoose.config")(db_name)
require("./routes/data.route")(app)


const server = app.listen(port, () => {
    console.log(`Listening a port in ${port}`);
})


const io = require("socket.io")(server);
let totalConnection = 0;


const itemWithSocket = {
    name: "Tural",
    lastName: "Hasanli",
    age: 29,

}

io.on("connection", (socket) => {
    totalConnection++;
    console.log(`Connected. Total connections:  ${totalConnection}`);
    socket.emit("item updates", totalConnection) //sending data to front end 


    socket.on("disconnect", () => {
        totalConnection--;
        console.log(`Disconnected. Total connections:  ${totalConnection}`);
    })
})
