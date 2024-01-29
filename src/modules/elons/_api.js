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
} = require("./_controller");

const { hasRole, isloggedIn } = require("../../shared/auth");
const { LikedElons } = require("./liked-elons");
let router = express.Router();
const { upload } = require("../../shared/config/multer.config");

let AddElonM = [isloggedIn, hasRole(["user"])];
let AllElonsM = [isloggedIn, hasRole(["admin", "super_admin"])];
let UpdateElonsAllM = [isloggedIn, hasRole(["amin", "super_admin"])];
let UpdateElonsM = [isloggedIn, hasRole(["user"])];
let DeleteElonsM = [isloggedIn, hasRole(["user"])];
let DeleteElonsAllM = [isloggedIn, hasRole(["admin"])];
let ChangeProsesM = [isloggedIn, hasRole(["admin", "super_admin"])];
let LikedElonsM = [isloggedIn, hasRole([isloggedIn, hasRole("user")])];
let FindByIdElonsM = [isloggedIn, hasRole("user", "admin", "super_admin")];

router.post("/elons", upload.array("images", 5), AddElonM, add_elons);
router.get("/elons", AllElonsM, all_elons);
router.put("/elonsadmin/:id", UpdateElonsAllM, update_all_elons);
router.put("/elons/:id", UpdateElonsM, update_elons);
router.delete("/elons/:id", DeleteElonsM, delete_elons);
router.delete("/elonsadmin/:id", DeleteElonsAllM, delete_elons_all);
router.patch("/elonchange/:id", ChangeProsesM, change_proses_elon);
router.post("/like/elons/:id", LikedElonsM, LikedElons);
router.get("/elons/:id", FindByIdElonsM, find_by_id_elons);
module.exports = router;
