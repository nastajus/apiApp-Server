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
}

function Task(category, text, type, tags, createdDate, modifiedDate) {
    this.category = category;
    this.text = text;
    this.type = type;
    this.tags = tags;
    //Auditable.call(this, createdDate, modifiedDate);
    Auditable.bind(this, createdDate, modifiedDate);
    Auditable();

}


var newObj = {
    createdDate:"cat",
    modifiedDate:"dog"
}
var func2 = Auditable.bind(newObj);
Auditable();
func2("not_a_cat", "not_a_dog");

var zackDante = {
    createdDate: "zack",
    modifiedDate: "dante"
}

var func333 = Auditable.bind(zackDante);
func333("!~zack", "!~dante");




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
        tasks[i].exportJson = function() {
            return JSON.stringify(this);
        };
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