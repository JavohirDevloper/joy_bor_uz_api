const express = require("express");
const {
  all_chats,
  onetoonechats,
  create_group,
  adduser_group,
} = require("./_controller");
const { isloggedIn, hasRole } = require("../../shared/auth");

let router = express.Router();

let MAllChats = [isloggedIn, hasRole(["user"])];
let Monetoonechats = [isloggedIn, hasRole(["user"])];
let McreateGroup = [isloggedIn, hasRole(["user"])];
let MAddUsersGroup = [isloggedIn, hasRole(["user"])];

router.get("/chat", MAllChats, all_chats);
router.post("/chat", Monetoonechats, onetoonechats);
router.post("/group", McreateGroup, create_group);
router.post("/group/add", MAddUsersGroup, adduser_group);

module.exports = router;
