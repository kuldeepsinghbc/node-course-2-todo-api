var mongoose = require("mongoose");
let db = {
  localhost: "mongodb://localhost:27017/TodoApp",
  mlab: "mongodb://todoAppUser:123@123@ds113606.mlab.com:13606/todoapp"
};
mongoose.Promise = global.Promise;
// mongoose.connect(db.localhost || db.mlab);
mongoose.connect(process.env.PORT ? db.mlab : db.localhost);

// mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/TodoApp");
module.exports = {
  mongoose
};
