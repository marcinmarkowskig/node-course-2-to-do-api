//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.')
  }
  console.log('Connected to MongoDB server.');

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5c5b11e168292c0d1f13ebc8')
  }, {//update operator
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result)
  })

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5c5c003316d28aff72474927')
  }, {//update operator
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result)
  })

  //client.close()
});
