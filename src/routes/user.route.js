const express = require("express");
const getallUsers = require("../controller/getAllUsers.controller");
const userRouter = express.Router();
userRouter.get("/getAllUsers/:id", getallUsers.getallUsers);
module.exports = userRouter;
