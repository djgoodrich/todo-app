const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, database) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

// const TodoDB = database.db('Todos');
// database.db('Todos').collection('Todos').find({
//     _id: new ObjectID("5a6e1f4fe6e6082292180028")
// }).toArray().then((docs) => {
//     console.log('Todos');
//     console.log(JSON.stringify(docs, undefined, 2));
// }, (err) => {
//     console.log('unable to fetch todos', err);
// });

// database.db('Todos').collection('Todos').find({}).count().then((count) => {
//     console.log('Todos');
//     console.log(`Todos count: ${count}`);
// }, (err) => {
//     console.log('unable to fetch todos', err);
// });
const usersDB = database.db('Users');
usersDB.collection('Users').find({name: 'Mike'}).toArray().then((docs) => {
    console.log('Users named mike');
    console.log('_________________');
    console.log(JSON.stringify(docs, undefined, 2));
}, (err) =>  {
    console.log('unable to fetch user named Mike', err);
});
});