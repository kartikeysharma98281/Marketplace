const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config();
const dbConfig =  require('./config/dbConfig');
const port = process.env.PORT || 5000;

const ussersRoute = require('./routes/usersRoute');

app.use('/api/users' , ussersRoute);

app.listen(port, () => console.log(`Node js/Express server started on ${port}`));