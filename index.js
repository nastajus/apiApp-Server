const express = require('express');
let mainRouter = express();

mainRouter.use(foo);

mainRouter.listen(9001);

console.log ("Connected to Ian API");


function foo (req, res) {

    res.status("asdf");
    res.send("Yo mama");

    console.log("This is a message from the demo package");
    console.log("request: " + req);
    console.log("response: " + res);

}