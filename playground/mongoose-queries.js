const {ObjectID} = require('mongodb')//potrzebne do walidacji id

const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')

var id = "5c5db966c52323c80a05dd38";

if (!ObjectID.isValid(id)) {
  console.log('ID not valid')
}

Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos', todos);
});

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todos', todo);
});

Todo.findById(id).then((todo) => {
  if(!todo) {
    return console.log('Id not found')
  }
  console.log('Todos', todo);
}).catch((e) => console.log(e));
