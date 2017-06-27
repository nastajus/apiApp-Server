const express = require('express');
let mainRouter = express();


let jsonTasks = [];


init();

mainRouter.get();

mainRouter.use(callbackMiddleware);

mainRouter.listen(9001);

console.log ("Nastajus API task router is running.");


/**
 * handle the type of incoming request, bound through "use"
 *
 * @param req
 * @param res
 */
function callbackMiddleware (req, res) {

    res.status(200);
    res.send("Status OK.");

    console.log("This is a message from the demo package");
    console.log("request: " + req);
    console.log("response: " + res);

}


function init() {
    let jsonTasks = createMockTasks();
}


function createMockTasks() {

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

function createJsonTask(category, text, type, tags) {
    return JSON.stringify({ category: category, tags: tags, text: text, type: type});
}
