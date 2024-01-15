const { AddBanner } = require("./add-banner");
const { EditBanner } = require("./edit-banner");
const { RemoveBanner } = require("./remove-banner");
const { UnRemoveBanner } = require("./unremove-banner");
const httpValidator = require("../../shared/http-validator");
const { AddBannerSchemas, UpdateBannerSchema } = require("./shema");

const add_banner = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, AddBannerSchemas);
    let result = await AddBanner({ body: req.body });
    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

const edit_banner = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, UpdateBannerSchema);
    let result = await EditBanner({ params: req.params, body: req.body });
    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

const remove_banner = async (req, res, next) => {
  try {
    let result = await RemoveBanner({ params: req.params });
    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

const unremove_banner = async (req, res, next) => {
  try {
    let result = await UnRemoveBanner({ params: req.params });
    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

module.exports = { add_banner, edit_banner, remove_banner, unremove_banner };