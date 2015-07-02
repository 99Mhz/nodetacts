/*
    Summary:    contactHelper.js is a module for the CRUD operations in nodetacts
    
    Author:     John Wiltse
    Creation:   7/1/2015
    Changes:
*/

var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;

var url = 'mongodb://localhost:27017/test';
var contactCollection = 'nodetacts'

var findDocuments = function(db, query, callback) {
    var contacts = [];
    //TODO: perhaps store everything in lower case and do a toLower on searches 
    var cursor = db.collection(contactCollection).find(/^query$/i); //case insensitive regex search
    cursor.each(function(err, doc) {
        if(err) {
            console.log(err);
            return callback(new Error('Trouble connecting to database'), null);
        } else {
            if(doc != null) {
                contacts.push(doc);
            } else {
                callback(null, contacts);
            }

        }    
    });  
};

//TODO: is this the best way to do this?
exports.find = function(contact, callback) {
    MongoClient.connect(url, function(err, db) {
        if(err) {
            console.log(err);
            if(callback && typeof(callback) === "function") {
                return callback(new Error('Trouble connecting to database'), null);
            } else {
                throw err;
            }
        } else {
            //Do work here
            console.log(contact);
            findDocuments(db, contact, function(err, contacts) {
                db.close();

                if(err) {
                    console.log(err);
                    return callback(new Error('Trouble finding document'), null);
                }
                if(callback && typeof(callback) === "function") {
                    callback(null, contacts);
                } else {
                    throw new Error('Function requires a callback.')
                }                
            });

        }
    });
}