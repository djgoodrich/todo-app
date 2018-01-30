const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, database) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    } 
    console.log('Connected to MongoDB Server');
    
    // const todoDB = database.db('Todos');
    // todoDB.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    const usersDB = database.db('Users');
    usersDB.collection('Users').insertOne({
        name: 'David',
        age: 39,
        location: 'Davidson NC'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to add user', err);
        }
        console.log(result.ops[0]._id.getTimestamp());
    });

    database.close();
});
