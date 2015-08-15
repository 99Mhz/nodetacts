# nodetacts

node contacts (nodetacts.js)

Summery:
nodetacts.js is a simple contact appliction written in node 
using mongodb to store the contact info. I'm using this as a
self teaching tool for node and mongodb.
                
Functional requirements:
Build a node address book. keep contacts in mongoDB
to start with each field in contact will be a single value.
Future changes will allow multiple phones etc.

start addressbook.js add
prompts for contact info ans saves to mongoDB

start addressbook.js find name
finds contacts in mongoDB and displays to console

start addressbook.js edit name
finds contact(s) in mongoDB and displays to console, but prompts edit(y/n) for each
if yes prompts for each field. Type in change or blank to keep default

start addressbook.js delete name
finds contacts in mongoDB and displays to console, but prompts delete(y/n) for each

Contact Document
{
    "_id" : ObjectId(),
    "contact" : {
        "firstname" : "John",
        "lastname" : "Wiltse",
        "cellphone" : "123-456-7891",
        "housephone" : "",
        "workphone" : "",
        "email" : "foo@yahoo.com"
    },
    "address" : {
        "number" : "8675309",
        "street" : "123th ave se",
        "city" : "green valley",
        "state" : "colorado",
        "zipcode" : "75397"
    }
}
