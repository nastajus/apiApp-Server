const express = require('express');
let mainRouter = express();


let jsonTasks = [];


init();

//mainRouter.get();

mainRouter.use(callbackMiddleware);

mainRouter.listen(9001);

console.log ("Nastajus API task router is running.");



function Auditable(createdDate, modifiedDate) {
    this.createdDate = new Date().toLocaleString(); //createdDate;
    this.modifiedDate = new Date().toLocaleString(); //modifiedDate;
}

function Task(category, text, type, tags) {
    this.category = category;
    this.text = text;
    this.type = type;
    this.tags = tags;
    Auditable.call(this);
}

Task.prototype.exportJson = function() {
    return JSON.stringify({ category: category, tags: tags, text: text, type: type, createdDate: createdDate, modifiedDate: modifiedDate});
}



/**
 * handle the type of incoming request, bound through "use"
 *
 * @param req
 * @param res
 */
function callbackMiddleware (req, res) {

    init();

    res.status(200);
    res.send("Status OK.");

    console.log("This is a message from the demo package");
    console.log("request: " + req);

    // for (var property in req) {
    //     if (req.hasOwnProperty(property)) {
    //         console.log ("   property: " + property + ", valueOf: " + property.valueOf() + ", value: " + property.value);
    //     }
    // }

    // Object.keys(req).forEach(function(key,index) {
    //     // key: the name of the object key
    //     // index: the ordinal position of the key within the object
    // });



    console.log("response: " + res);

}


function init() {
    //let jsonUsers = createMockUsers();
    let jsonTasks = createMockTasks();
    console.log(jsonTasks);
}


function createMockTasksOld() {

    //habit? //daily? //todo-one off? //reward
    jsonTasks.push(createJsonTask("declutter", "complete nagging tasks", "habit"));
    jsonTasks.push(createJsonTask("finance", "eliminate financial waste", "habit"));
    jsonTasks.push(createJsonTask("fun", "complete video games on my shame pile", "", ["fulfillment", "completionist"]));
    jsonTasks.push(createJsonTask("declutter", "physically eliminate fridge spoilage & clutter weekly", "habit"));
    jsonTasks.push(createJsonTask("", "complete execution of own projects", "", ["pride", "marketability", "fulfillment"]));
    jsonTasks.push(createJsonTask("education", "establish a process I use to learn a whole new domain from scratch, effectively", "", ["fulfillment", "pride", "~leverage", "~effectiveness"])) //define using an initial tilde ~ as a weasle word, to be revisited later.
    //affirmation
    //growth, projects..
    //goals vs. purpose vs. mini-purpose. vs smart goals. :D


    //JSON.stringify([new Number(1), new String('false'), new Boolean(false)]);
    //JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] });

    //return jsonTasks;

}

function createMockTasks() {
    jsonTasks.push(JSON.stringify(new Task("declutter", "complete nagging tasks", "habit")));
    jsonTasks.push(JSON.stringify(new Task("finance", "eliminate financial waste", "habit")));
    jsonTasks.push(JSON.stringify(new Task("fun", "complete video games on my shame pile", "", ["fulfillment", "completionist"])));
    jsonTasks.push(JSON.stringify(new Task("declutter", "physically eliminate fridge spoilage & clutter weekly", "habit")));
    jsonTasks.push(JSON.stringify(new Task("", "complete execution of own projects", "", ["pride", "marketability", "fulfillment"])));
    jsonTasks.push(JSON.stringify(new Task("education", "establish a process I use to learn a whole new domain from scratch, effectively", "", ["fulfillment", "pride", "~leverage", "~effectiveness"]))); //define using an initial tilde ~ as a weasle word, to be revisited later.

    console.log("success new Tasks made");
    return jsonTasks;
}

function createMockUsers() {
    //jsonUsers.push()

}

function createJsonTask(category, text, type, tags) {
    return JSON.stringify({ category: category, tags: tags, text: text, type: type});
}

function createJsonUser(username, password) {
    return JSON.stringify({ username: username, password: password, createdDate: createdDate});
}


