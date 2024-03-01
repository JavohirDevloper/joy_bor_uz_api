const express = require("express");
const { isloggedIn, hasRole } = require("../../shared/auth");
const MongoId = require("../../shared/validator/isMongoId");
const {
  add_admin,
  login_admin,
  list_admin,
  show_admin,
  remove_admin,
  unremove_admin,
  edit_admin,
  change_password_admin,
} = require("./_controller");

const router = express.Router();

// const mRegisterAdmin = [isloggedIn, hasRole(["super_admin"])];
// const mListAdmin = [isloggedIn, hasRole(["admin", "super_admin"])];
// const mShowAdmin = [isloggedIn, MongoId, hasRole(["admin", "super_admin"])];
// const mRemoveAdmin = [isloggedIn, MongoId, hasRole(["super_admin"])];
// const mUnremoveAdmin = [isloggedIn, MongoId, hasRole(["super_admin"])];
// const mEditAdmin = [isloggedIn, MongoId, hasRole(["super_admin"])];
// const mChangePasswordAdmin = [isloggedIn, hasRole(["super_admin"])];
const mRegisterAdmin = [isloggedIn];
const mListAdmin = [isloggedIn];
const mShowAdmin = [isloggedIn, MongoId];
const mRemoveAdmin = [isloggedIn, MongoId];
const mUnremoveAdmin = [isloggedIn, MongoId];
const mEditAdmin = [isloggedIn, MongoId];
const mChangePasswordAdmin = [isloggedIn];

router.post("/register/admin", mRegisterAdmin, add_admin);
router.post("/login/admin", login_admin);
router.get("/admin", mListAdmin, list_admin);
router.get("/admin/:id", mShowAdmin, show_admin);
router.delete("/admin/:id", mRemoveAdmin, remove_admin);
router.delete("/admin/un/:id", mUnremoveAdmin, unremove_admin);
router.patch("/admin/:id", mEditAdmin, edit_admin);
router.patch(
  "/change/password/admin",
  mChangePasswordAdmin,
  change_password_admin
);

module.exports = router;
