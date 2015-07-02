/*
    Summary:    nodetacts.js is a simple contact appliction written in node 
                using mongodb to store the contact info. I'm using this as a
                self teaching tool for node and mongodb.
                View ReadMe.md for functional requirements on V1
    Author:     John Wiltse
    Creation:   7/1/2015
    Changes:
*/
var colors = require('colors');
var contactHelper = require('./contactHelper.js')

var printUsage = function() {
    console.log("USAGE: nodetacts.js [add, find, delete, modify]".cyan);
}

//entry point
//check for a valid command line args and call appropriate function
if(process.argv[2] === "add") {
    console.log('Not implimented yet.');
} else if(process.argv[2] === "find") {
        //TODO: Prompt somehow for query parameters
        //TODO: Make a formatted output
        contactHelper.find({'contact.lastname' : 'wiltse'}, function(err, contacts) {
        console.log(contacts); 
    });
} else if(process.argv[2] === "delete") {
    console.log('Not implimented yet.');
} else if(process.argv[2] === "modify") {
    console.log('Not implimented yet.');
} else {
    printUsage();    
};
