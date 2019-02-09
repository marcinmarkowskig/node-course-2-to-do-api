var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//połączenie z bazą danych
mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI || process.env.'mongodb://MarcinMar:MLab44@ds127545.mlab.com:27545/mongo-data-node-app' || 'mongodb://localhost:27017/TodoApp' || "mongodb://MarcinMar:MLab44@ds127545.mlab.com:27545/mongo-data-node-app");

module.exports = {
  mongoose
}
