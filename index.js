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

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.z7kch.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run() {

  try {
    await client.connect();
    const database = client.db("travelsinfo");
    const hotelInfoCollection = database.collection("hotelInfo");
    const tourInfoCollection = database.collection(" tourInfo" );
    const flightsCollection = database.collection("flights");
    const busCollection = database.collection(" busData");


        
   // GET API OFFERS
   app.get('/flightsData', async (req,res)=>{
    const cursor = flightsCollection.find({});
    const flights = await cursor.toArray();
    res.send(flights);
   });

  
   app.get('/hotelData', async (req,res)=>{
    const cursor = hotelInfoCollection.find({});
    const hotels = await cursor.toArray();
    res.send(hotels);
   });

   app.get('/toursData', async (req,res)=>{
    const cursors = tourInfoCollection.find({});
    const tours = await cursors.toArray();
    res.send(tours);
   });

 
   app.get('/busData', async (req,res)=>{
     const cursor=busCollection.find({});
     const busData= await cursor.toArray();
     res.send(busData)
   })
   
  } finally {
   // await client.close();
  }
}
run().catch(console.dir);

app.get('/',(req,res)=>{
  res.send('Running the server on Mr. Travel');
})
app.listen(port, () => {
  console.log('Running the server on Mr. Travel',port)
})
//user : MrTravel 
//Pass: SrZmk0NfFNM6mod3 