const {MongoClient, ObjectID} = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'TodoApp';

MongoClient.connect(url, (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongodb server', err);
    }

    console.log('Connect to mongodb successfully');
    
    //use TodoApp database
    const db = client.db(dbName);
    // db.collection('Todos')
    //     .find({_id: new ObjectID('5b013ddc97f81c594ec7f365')})
    //     .toArray()
    //     .then((docs) => {
    //         console.log('Todos');
    //         console.log(JSON.stringify(docs, undefined, 2));
    //     }).catch((err) => {
    //         console.log('Unable to find Todos', err);
    //     });
    
    db.collection('Todos')
        .find()
        .toArray()
        .then((docs) => {
            console.log('Todos');
            console.log(JSON.stringify(docs, undefined, 2));
        }).catch((err) => {
            console.log('Unable to find Todos', err);
        });
    
    client.close();
});