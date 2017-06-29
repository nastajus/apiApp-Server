const express = require('express');
let mainRouter = express();


let tasks = [];
let users = [];


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
        return JSON.stringify({ category: this.category, tags: this.tags, text: this.text, type: this.type, createdDate: this.createdDate, modifiedDate: this.modifiedDate});
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

    console.log("response: " + res);
}


function init() {
    //let jsonUsers = createMockUsers();
    let tasks = createMockTasks();

    let jsonTasks = [];

    for (let i=0; i<tasks.length; i++) {
        jsonTasks.push(tasks[i].exportJson());
    }

    console.log(jsonTasks);
}

function createMockTasks() {
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
    //users.push()

}