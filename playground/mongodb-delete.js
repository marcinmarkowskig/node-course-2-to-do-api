//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.')
  }
  console.log('Connected to MongoDB server.');

  //deleteMany
  db.collection('Todos').deleteMany({text:'Dog'}).then((result) => {
    console.log(result)
  });

  //deleteOne
  db.collection('Todos').deleteOne({_id: new ObjectID('141hd9349aj')}).then((result) => {
    console.log(result)
  })

  //findOneAndDelete
  db.collection('Todos').findOneAndDelete({text:'Rat'}).then((result) => {
    console.log(result)
  })


  //client.close()
});
