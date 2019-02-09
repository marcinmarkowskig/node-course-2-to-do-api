var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//połączenie z bazą danych
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp' || "mongodb://MarcinMar:MarcinMar@ds127545.mlab.com:27545/mongo-data-node-app");

module.exports = {
  mongoose
}
