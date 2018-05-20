const {MongoClient, ObjectID} = require('mongodb');

const url = 'mongodb://localhost';
const dbName = 'TodoApp';

MongoClient.connect(url, (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongodb server', err);
    }

    console.log('Connected successfully to mongodb server');
    const db = client.db(dbName);
    // db.collection('Todos')
    //     .deleteMany({text: 'Eat some lunch'})
    //     .then((result) => {
    //         console.log(result);
    //     });

    //delete one 
    // db.collection('Todos')
    //     .deleteOne({text: 'Walk the dog'})
    //     .then((result) => {
    //         console.log(result);
    //     });

    //findOnAndDelete
    db.collection('Todos')
        .findOneAndDelete({completed: false})
        .then((result) => {
            console.log(result);
        });
    client.close();
});