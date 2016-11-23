var express = require("express");

var app = express();

var router = require("./router.js");

function server(config) {

    router(app, express);

    app.listen(config.get("port"), function() {
        console.log("I am ready on port " + config.get("port"));
    })

}

module.exports = server;
