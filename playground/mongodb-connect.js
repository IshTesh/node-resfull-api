const {MongoClient, ObjectID} = require('mongodb');

const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'TodoApp';

MongoClient.connect(url, (err, client) => {

    if (err) {
       return console.log("Connected successfully to server");
    }
    
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    },(err, result) => {
        if (err) {
            return console.log("Unable to insert todos", err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

      db.collection('User')
        .insertOne({
            name: 'Ishmael Kargbo',
            age: 21,
            loctaion: 'Freetown Sierra Leone'
        }, (err, result) => {
            if (err){
                return console.log("Unable to insert user", err);
            }

            console.log(JSON.stringify(result.ops, undefined, 2));
        });

    client.close();
});