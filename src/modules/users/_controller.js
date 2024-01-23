const express = require("express");
const { AllUsers } = require("./all-users");
const { AddUser } = require("./add-users");
const { AddUserSchemas, UpdateUserSchema } = require("./schema");
const httpValidator = require("../../shared/http-validator");
const { UpdateUser } = require("./update-users");
const { RegisterUsers } = require("./register-users");
const { LoginUsers } = require("./login-users");
const { UpdateUserAll } = require("./update-all-users");
const { FindUsers } = require("./find-users-my");
const { FindByIdUsers } = require("./findbyid-users");
const { DeleteUsersAll } = require("./delete-all-users");
const { DeleteUsersById } = require("./delete-id-users");
/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const all_users = async (req, res, next) => {
  try {
    let result = await AllUsers();
    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const add_users = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, AddUserSchemas);
    let result = await AddUser({ body: req.body });
    res.status(201).json({ data: result });
  } catch (error) {
    next(error);
  }
};

const loginorregister = async (req, res, next) => {
  let result = await RegisterUsers({ body: req.body });
  res.status(200).json({ data: result });
  try {
  } catch (error) {
    next(error);
  }
};
/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const update_user = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, UpdateUserSchema);
    let result = await UpdateUser({ body: req.body, user: req.user });
    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const update_all_users = async () => {
  try {
    httpValidator({ body: req.body }, UpdateUserSchema);
    let result = await UpdateUserAll({ body: req.body, params: req.params });
    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const find_my = async (req, res, next) => {
  try {
    let result = await FindUsers({ user: req.user });
    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

const findby_id = async (req, res, next) => {
  try {
    let result = await FindByIdUsers({ params: req.params });
    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

const delete_user_me = async (req, res, next) => {
  try {
    let result = await DeleteUsersAll({ user: req.user });
    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
    w;
  }
};

const delete_users_id = async (req, res, next) => {
  try {
    let result = await DeleteUsersById({ params: req.params });
    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  all_users,
  add_users,
  update_user,
  update_all_users,
  find_my,
  findby_id,
  delete_user_me,
  delete_users_id,
  loginorregister,
};
