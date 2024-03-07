const express = require("express");
const AddNotifiocation = require("./add-notification");
const AllNotfication = require("./all-notification");
const Mynotifications = require("./my-notifications");
const FindByIdNotification = require("./findbyid-notification");
const ChangeNotificationStatus = require("./change-notification-status");
const UpdateNotification = require("./update-notification");
const DeleteNotification = require("./delete-notification");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const all_notification = async (req, res, next) => {
  try {
    let result = await AllNotfication();
    res.status(200).json(result);
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

const add_notification = async (req, res, next) => {
  try {
    let result = AddNotifiocation({ body: req.body });
    res.status(201).json(result);
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

const my_notifications = async (req, res, next) => {
  try {
    let result = await Mynotifications({ user: req.user });
    res.status(200).json(result);
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

const findbyid_notification_elon = async (req, res, next) => {
  try {
    let result = await FindByIdNotification({ params: req.params });
    res.status(200).json(result);
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

const change_notification_status = async (req, res, next) => {
  try {
    let result = await ChangeNotificationStatus({
      params: req.params,
    });
    res.status(201).json(result);
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

const update_notification = async (req, res, next) => {
  try {
    let result = await UpdateNotification({
      body: req.body,
      params: req.params,
    });
    res.status(201).json(result);
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

const delete_notification = async (req, res, next) => {
  try {
    let result = await DeleteNotification({ params: req.params });
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  all_notification,
  add_notification,
  my_notifications,
  findbyid_notification_elon,
  change_notification_status,
  update_notification,
  delete_notification,
};
