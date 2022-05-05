const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const ObjectId = require('mongodb').ObjectId;
const express = require('express');
const cors = require('cors')
const app =express();
const port = process.env.PORT || 8000;

//midalware
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
  res.send('Running the server on Mr. Travel');
})
app.listen(port, () => {
  console.log('Running the server on Mr. Travel',port)
})
//user : MrTravel
//Pass: JMSCAzOu7DP7cnvYSS