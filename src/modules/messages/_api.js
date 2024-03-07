const express = require("express");
const {
  find_messages,
  send_messges,
  update_message,
  delete_message,
} = require("./_controller");
const isLoggedIn = require("../../shared/auth/isLoggedIn");
const { hasRole } = require("../../shared/auth");

let router = express.Router();

let MFindMessages = [isLoggedIn, hasRole(["user"])];
let MAddMessages = [isLoggedIn, hasRole(["user"])];
let MUpdateMessages = [isLoggedIn, hasRole(["user"])];
let MDeleteMessages = [isLoggedIn, hasRole(["user"])];

router.get("/message/:chatId", MFindMessages, find_messages);
router.post("/message", MAddMessages, send_messges);
router.put("/message/:messageId", MUpdateMessages, update_message);
router.delete("/message/:messageId", MDeleteMessages, delete_message);
module.exports = router;
