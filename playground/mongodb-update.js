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

  /* db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5aec87890ca46f08fc206be7')
  }, {
    $set: {
      completed: true
    }

  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  }); */
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5aebb1794edbeb3db4ecc29c')
  }, {
    $set: {
      name: 'Andrew'
    },
    $inc: {
      age: 1
    }

  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
  // 5aebb1794edbeb3db4ecc29c
  // client.close();
});