// const MongoClient = require('mongodb').MongoClient;
const {
  MongoClient,
  ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return ('Unable to connect to MonogDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // deleteMany
  /*  db.collection('Todos').deleteMany({
     text: 'Eat lunch'
   }).then((result) => {
     console.log(result);
   }); */

  // deleteOne
  /*   db.collection('Todos').deleteOne({
      text: 'Eat lunch'
    }).then((result) => {
      console.log(result);
    }); */
  // findOneAndDelete
  /*   db.collection('Todos').findOneAndDelete({
      completed: false
    }).then((result) => {
      console.log(result);
    }); */
  /* db.collection('Users').deleteMany({
    name: 'Andrew'
  }); */

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID("5aec8af50ca46f08fc206e13")
  }).then((results) => {
    console.log(JSON.stringify(results, undefined, 2));
  });

  // client.close();
});