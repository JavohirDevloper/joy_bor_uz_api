const express = require("express");
const {
  all_chats,
  onetoonechats,
  update_chats,
  delete_chats,
} = require("./_controller");
const { isloggedIn, hasRole } = require("../../shared/auth");

let router = express.Router();

let MAllChats = [isloggedIn, hasRole(["user"])];
let Monetoonechats = [isloggedIn, hasRole(["user"])];
let MUpdateChats = [isloggedIn, hasRole(["user"])];
let MDeleteChats = [isloggedIn, hasRole(["user"])];

router.get("/chat", MAllChats, all_chats);
router.post("/chat", Monetoonechats, onetoonechats);
router.put("/chat/:chatId", MUpdateChats, update_chats);
router.delete("/chat/:chatId", MDeleteChats, delete_chats);

module.exports = router;
