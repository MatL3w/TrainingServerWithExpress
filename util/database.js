const mongodb = require('mongodb');
const MongoClient  = mongodb.MongoClient;

let _db;

exports.mongoConnect =()=>{
  MongoClient.connect("mongodb+srv://lecislav:usZSIcaVCbS1WPxK@cluster0.cehtsby.mongodb.net/?retryWrites=true&w=majority")
    .then(client => {
      console.log("connected");
      _db=client.db();
    })
    .catch((err) => {
      console.log(err)
      throw err;
    });
}

exports.getDb=()=>{
  if(_db){
    return _db;
  }
  throw "no database found";
}


