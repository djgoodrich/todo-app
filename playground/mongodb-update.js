const { MongoClient, ObjectId } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    const db = client.db('Users');
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectId('5a6e1bcc016b9971d67c449e')
    }, {
       $set: {
            name: 'David'
       },
        $inc: {
            age: 1
        },
    }, 
    {
        returnNewDocument: true
    }).then((result) => {
        console.log(result);
    });
});