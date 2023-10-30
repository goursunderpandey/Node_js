const express = require("express");
const app = express(); 

require('dotenv').config();
const bodyParser = require('body-parser');
const routes = require("./Routers/Routers.jsx");
require("./database/Connection.jsx");

const PORT = process.env.PORT || 3000; 

app.use(bodyParser.json());
app.use(express.json()); 
app.use(routes);

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`); 
});
