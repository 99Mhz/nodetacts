node contacts (nodetacts.js)

build a node address book. keep contacts in mongoDB
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
        "cellphone" : "206-715-8347",
        "housephone" : "",
        "workphone" : "",
        "email" : "speed99mhz@yahoo.com"
    },
    "address" : {
        "number" : "28123",
        "street" : "238th ave se",
        "city" : "maple valley",
        "state" : "washington",
        "zipcode" : "98038"
    }
}
