const express = require("express");
const {
  add_banner,
  edit_banner,
  unremove_banner,
  remove_banner,
  all_banners,
  find_by_id_banners,
} = require("./_controller");
const { isloggedIn, hasRole } = require("../../shared/auth");

let router = express.Router();

let AddBannerM = [isloggedIn];
let EditBannerM = [isloggedIn];
let RemoveBannerM = [isloggedIn];
let UnremoveBannerM = [isloggedIn];

router.post("/banner", AddBannerM, add_banner);
router.put("/banner/:id", EditBannerM, edit_banner);
router.delete("/banner/:id", RemoveBannerM, remove_banner);
router.delete("/banner/un/:id", UnremoveBannerM, unremove_banner);
router.get("/banner", all_banners);
router.get("/banner/:id", find_by_id_banners);

module.exports = router;
