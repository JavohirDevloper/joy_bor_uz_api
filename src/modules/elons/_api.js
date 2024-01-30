const express = require("express");
const {
  add_elons,
  all_elons,
  update_all_elons,
  update_elons,
  delete_elons,
  delete_elons_all,
  change_proses_elon,
  find_by_id_elons,
  find_waiting_elons,
  resend_elon,
} = require("./_controller");

const { hasRole, isloggedIn } = require("../../shared/auth");
const { LikedElons } = require("./liked-elons");
let router = express.Router();
const { upload } = require("../../shared/config/multer.config");

let AddElonM = [isloggedIn, hasRole(["user"])];
let UpdateElonsAllM = [isloggedIn, hasRole(["amin", "super_admin"])];
let UpdateElonsM = [isloggedIn, hasRole(["user"])];
let DeleteElonsM = [isloggedIn, hasRole(["user"])];
let DeleteElonsAllM = [isloggedIn, hasRole(["admin"])];
let ChangeProsesM = [isloggedIn, hasRole(["user", "admin", "super_admin"])];
let LikedElonsM = [isloggedIn, hasRole([isloggedIn, hasRole("user")])];
let FindByIdElonsM = [isloggedIn, hasRole("user", "admin", "super_admin")];
let FindWaitingElonsM = [isloggedIn, hasRole(["admin", "super_admin"])];
let ResendM = [isloggedIn, hasRole(["user"])];

router.post("/elons", upload.array("images", 5), AddElonM, add_elons);
router.get("/elons", all_elons);
router.put(
  "/elonsadmin/:id",
  upload.array("images", 5),
  UpdateElonsAllM,
  update_all_elons
);
router.put("/elons/:id", upload.array("images", 5), UpdateElonsM, update_elons);
router.delete("/elons/:id", DeleteElonsM, delete_elons);
router.delete("/elonsadmin/:id", DeleteElonsAllM, delete_elons_all);
router.patch("/elonchange/:id", ChangeProsesM, change_proses_elon);
router.post("/like/elons/:id", LikedElonsM, LikedElons);
router.get("/elons/:id", FindByIdElonsM, find_by_id_elons);
router.get("/elons/waiting", FindWaitingElonsM, find_waiting_elons);
router.get("/elons/resend/:id", ResendM, resend_elon);

module.exports = router;
