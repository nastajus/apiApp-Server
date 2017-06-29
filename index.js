const express = require('express');
let mainRouter = express();


let tasks = [];


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

    Task.prototype.exportJson = function() {
        return JSON.stringify({ category: this.category, tags: this.tags, text: this.text, type: this.type}); //, createdDate: createdDate, modifiedDate: modifiedDate});
    };
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
    let tasks = createMockTasks();

    let jsonTasks = [];

    // tasks.forEach(function(task){
    //     task.exportJson();
    //     //jsonTasks.push(task.exportJson());
    //     //There is no way to stop or break a forEach() loop other than by throwing an exception. If you need such behavior, the forEach() method is the wrong tool. Use a plain loop instead.
    // });

    for (let i=0; i<tasks.length; i++) {
        jsonTasks.push(tasks[i].exportJson());
    }

    console.log(jsonTasks);
}

function createMockTasks(t) {
    tasks.push(new Task("declutter", "complete nagging tasks", "habit"));
    tasks.push(new Task("finance", "eliminate financial waste", "habit"));
    tasks.push(new Task("fun", "complete video games on my shame pile", "", ["fulfillment", "completionist"]));
    tasks.push(new Task("declutter", "physically eliminate fridge spoilage & clutter weekly", "habit"));
    tasks.push(new Task("", "complete execution of own projects", "", ["pride", "marketability", "fulfillment"]));
    tasks.push(new Task("education", "establish a process I use to learn a whole new domain from scratch, effectively", "", ["fulfillment", "pride", "~leverage", "~effectiveness"])); //define using an initial tilde ~ as a weasle word, to be revisited later.

    console.log("success new Tasks made");
    return tasks;
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


