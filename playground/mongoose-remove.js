const {ObjectID} = require('mongodb')//potrzebne do walidacji id

const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')

 // jest ok
// Todo.remove({}).then((result) => {
//   console.log(result)
// })

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findOneAndRemove(_id: '5c5ea51d15769811e51a9062').then((todo) => {
//   console.log(todo);
// });

Todo.findByIdAndRemove('5c5ea51d15769811e51a9062').then((todo) => {
  console.log(todo);
});
