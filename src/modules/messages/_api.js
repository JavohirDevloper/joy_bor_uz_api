const express = require("express");
const { find_messages, send_messges } = require("./_controller");
const isLoggedIn = require("../../shared/auth/isLoggedIn");
const { hasRole } = require("../../shared/auth");
const isMongoId = require("../../shared/validator/isMongoId");

let router = express.Router();

let MFindMessages = [isLoggedIn, isMongoId, hasRole(["user"])];
let MAddMessages = [isLoggedIn, hasRole(["user"])];

router.get("/message/:chatId", MFindMessages, find_messages);
router.post("/message", MAddMessages, send_messges);

module.exports = router;
