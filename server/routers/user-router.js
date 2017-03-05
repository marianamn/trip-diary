/* globals module require */

const express = require("express");

let Router = express.Router;

module.exports = function({ app, controllers, middlewares }) {
    let router = new Router();

    router
        .post("/register", controllers.register)
        .post("/login", controllers.login)
        .post("/logout", middlewares.isAuthenticated, controllers.logout)
        .get("/users/:id", controllers.getUserById)
        .get("/users", controllers.getAllUsers);

    app.use("/auth", router);

    return router;
};