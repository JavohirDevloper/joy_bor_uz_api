const express = require("express")
const { elons_images, image } = require("./_controller")
const { upload } = require("../../shared/config/multer.config")
const { isloggedIn, hasRole } = require("../../shared/auth")

let router = express.Router()
let UploadElonM = [isloggedIn,hasRole(["admin","super_admin","user"])]
let UploadImageM = [isloggedIn,hasRole(["admin","super_admin","user"])]

router.post('/upload/elons', UploadElonM,upload.array("images",6), elons_images)
router.post("/upload/image",UploadImageM,upload.single("image"),image)

module.exports = router