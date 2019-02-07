//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//var obj = new ObjectID();
// var user = {name: 'marcin', age: 25};
// var {name} = user;
// console.log(name)

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.')
  }
  console.log('Connected to MongoDB server.');
  const db = client.db('TodoApp')

  // db.collection('Todos').find().toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err)
  // });

  db.collection('Users').find({ name: 'Marcinek' }).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs,undefined, 2));
  }, (err) => {
    console.log('Unable to fetch users', err)
  });

  //client.close()
});
