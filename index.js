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
    this.createdDate = (createdDate)? createdDate.toLocaleString() : new Date().toLocaleString();
    this.modifiedDate = (modifiedDate)? modifiedDate.toLocaleString() : new Date().toLocaleString();
    if (!Object.prototype.toString.call(this.createdDate) === '[object Date]') {
        throw new TypeError('createdDate is not a valid Date');
    }
    if (!Object.prototype.toString.call(this.modifiedDate) === '[object Date]') {
        throw new TypeError('modifiedDate is not a valid Date');
    }
}

function Task(category, text, type, tags, createdDate, modifiedDate) {
    this.category = category;
    this.text = text;
    this.type = type;
    this.tags = tags;
    Auditable.call(this, createdDate, modifiedDate);

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
    let year = 2000;
    let month = 11; //0-based
    let date = 25;
    let hours = 6;
    let minutes = 30;
    let seconds = 0;
    let milliseconds = 0;
    //native Date gets strinified as: "createdDate":"2000-12-25T11:30:00.000Z"
    //toLocaleString() is pretty as:  "modifiedDate":"6/28/2017, 9:16:24 PM"
    tasks.push(new Task("declutter", "complete nagging tasks", "habit", null, new Date(year, month, date, hours, minutes, seconds, milliseconds)));
    tasks.push(new Task("finance", "eliminate financial waste", "habit", null, "not a date"));
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