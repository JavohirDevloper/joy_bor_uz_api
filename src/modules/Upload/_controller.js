const ElonsUpload = require("./elons-upload")
const express = require("express")
const ImageUpload = require("./user-upload")

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @param {express.NextFunction} next 
 */

const elons_images = async (req,res,next) => {
    try {
        let result = await ElonsUpload({files:req.files})
        res.status(201).json(result)
    } catch (error) {
        next(error)
    }
} 

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @param {express.NextFunction} next 
 */

const image = async (req,res,next)=> {
    try {
        let result = await ImageUpload({file:req.file})
        res.status(201).json(result)
    } catch (error) {
        next(error)
    }
}

module.exports = {elons_images,image}