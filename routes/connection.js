var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dbudl:Shapla16@Doel26@casualty.giqod.mongodb.net/dbudl?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
/*Database connection to mongodb Atlas*/
  client.connect(err => {
    const collection = client.db("dbudl").collection("admin");
    // perform actions on the collection object
    console.log("we are connceted")
    client.close();
  });
