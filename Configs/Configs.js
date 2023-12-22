//This is Configuration file used for connect to database to server by mongoose;
const mongoose = require('mongoose');
require('dotenv').config();

const connection = mongoose.connect(`mongodb+srv://aniruthasivakumar03:Mahathi03@cluster0.neaztk4.mongodb.net/?retryWrites=true&w=majority`);

module.exports = { connection };