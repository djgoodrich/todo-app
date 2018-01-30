const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    const db = client.db('Users');
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    
    //delete many
    // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
    //     console.log(result);
    // });

    //delete one
    // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
    //     console.log(result);
    // });

    //find One and Delete

    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({name: 'David'}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({_id: new ObjectID("5a6e1b7983c96271cf8a468b")}).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });
});
