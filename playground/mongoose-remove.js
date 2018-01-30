const {ObjectID} = require('mongodb');

const {moongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// }) ;

Todo.findOneAndRemove({}).then

Todo.findByIdAndRemove('5a6f7481e6e608229218e00e').then((todo) => {
    console.log(todo);
});