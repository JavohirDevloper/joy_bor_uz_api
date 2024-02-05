const express = require("express");
const {
  all_notification,
  add_notification,
  my_notifications,
  findbyid_notification_elon,
  change_notification_status,
  update_notification,
  delete_notification,
} = require("./_controller");
const { isloggedIn, hasRole } = require("../../shared/auth/index");
let router = express.Router();

let MAllNotifications = [isloggedIn, hasRole(["admin", "super_admin"])];
let MAddNotification = [isloggedIn, hasRole(["admin", "super_admin"])];
let MMynotifications = [isloggedIn, hasRole("user")];
let MFindNotification = [isloggedIn, hasRole(["admin", "super_admin"])];
let MChangeStatus = [isloggedIn, hasRole(["admin", "super_admin"])];
let MUpdateNotification = [isloggedIn, hasRole("admin", "super_admin")];
let MDeleteNotification = [isloggedIn, hasRole(["admin", "super_admin"])];

router.get("/notification/elons", MAllNotifications, all_notification);
router.post("/notification/elon", MAddNotification, add_notification);
router.get("/notification/me", MMynotifications, my_notifications);
router.get("/notification/:id", MFindNotification, findbyid_notification_elon);
router.patch(
  "/notification/change/:id",
  MChangeStatus,
  change_notification_status
);
router.put("/notification/:id", MUpdateNotification, update_notification);
router.delete("/notification/:id", MDeleteNotification, delete_notification);

module.exports = router;
