const { AllElons } = require("./all-elons");
const { Add_Elons } = require("./add-elons");
const { UpdateAll_Elons } = require("./update-all-elons");
const { DeleteElons } = require("./delete_elons");
const { DeleteElonsAll } = require("./delete-elons-all");
const { Update_Elons } = require("./update-elon");
const { Change_Elon_Proses } = require("./change-elon-proses");
const { FindByIdElons } = require("./findbyidelons");
const { FindWaitingElons } = require("./waiting-elons");
const { ResentElon } = require("./resend-status-elon");

const all_elons = async (req, res, next) => {
  let result = await AllElons({ query: req.query });
  await res.status(200).json({ data: result });
  try {
  } catch (error) {
    next(error);
  }
};

const addelons = async (req, res, next) => {
  try {
    let result = await Add_Elons({
      body: req.body,
      user: req.user,
      files: req.files,
    });
    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

const update_all_elons = async (req, res, next) => {
  try {
    let result = await UpdateAll_Elons({
      params: req.params,
      body: req.body,
      files: req.files,
    });
    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

const update_elons = async (req, res, next) => {
  try {
    let result = await Update_Elons({
      params: req.params,
      user: req.user,
      body: req.body,
      files: req.files,
    });
    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

const delete_elons = async (req, res, next) => {
  try {
    let result = await DeleteElons({ params: req.params, user: req.params });
    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

const delete_elons_all = async (req, res, next) => {
  try {
    let result = await DeleteElonsAll({ params: req.params });
    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

const change_proses_elon = async (req, res, next) => {
  try {
    let result = await Change_Elon_Proses({
      params: req.params,
      body: req.body,
    });
    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

const find_by_id_elons = async (req, res, next) => {
  try {
    let result = await FindByIdElons({ params: req.params });
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const find_waiting_elons = async (req, res, next) => {
  try {
    let result = await FindWaitingElons();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const resend_elon = async (req, res, next) => {
  try {
    let result = await ResentElon({ params: req.params });
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  all_elons,
  addelons,
  update_all_elons,
  delete_elons,
  delete_elons_all,
  update_elons,
  change_proses_elon,
  find_by_id_elons,
  find_waiting_elons,
  resend_elon,
};
