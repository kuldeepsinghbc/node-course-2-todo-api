const { ObjectID } = require("mongodb");
const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("./../server/models/user");
// Todo.remove({})
/* Todo.remove({}).then(result => {
  console.log(result);
}); */
// Todo.findOneRmove
// Todo.findByIdAndRemove

/* Todo.findOneAndRemove({ _id: "5af09b4f0ca46f08fc227049" }).then((todo)=>{
  console.log(todo);
}); */
Todo.findByIdAndRemove("5af09b4f0ca46f08fc227049").then(todo => {
  console.log(todo);
});
