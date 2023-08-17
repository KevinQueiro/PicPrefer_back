import PhotoSchema from '../models/index.model.js'
import { deleteImage, uploadImage } from '../utils/cloudinary.js';
import fs from 'fs-extra';
import { v2 as cloudinary } from 'cloudinary';

export const getPhotos = async (req, res) => {
    try {
        const list = await PhotoSchema.find()
        res.send(list)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getOnePhoto = async (req, res) => {
    try {
        const one = await PhotoSchema.find({ sid: req.params.sid })
        res.send(one)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getLength = async (req, res) => {
    try {
        res.send({ length: await listLength() })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const listLength = async () => {
    try {
        const list = await PhotoSchema.find()
        return Object.keys(list).length
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const savePhotos = async (req, res) => {
    cloudinary.config({
        cloud_name: process.env['CLOUDINARY_CLOUD_NAME'],
        api_key: process.env['CLOUDINARY_API_KEY'],
        api_secret: process.env['CLOUDINARY_SECRET'],
        secure: true
    })
    try {

        const result = await uploadImage(req.files.file.tempFilePath)
        const newPhoto = new PhotoSchema({
            name: req.body.name,
            author: req.body.author,
            public_id: result.public_id,
            secure_url: result.secure_url,
            sid: await listLength()
        })
        await fs.unlink(req.files.file.tempFilePath)
        const savedPhoto = await newPhoto.save()
        res.send('saved')
    } catch (error) {
        return res.status(500).send(error)
    }
}

export const deletePhoto = async (req, res) => {
    try {
        const photo = await PhotoSchema.findByIdAndDelete(req.params.id)
        console.log(photo.public_id);
        await deleteImage(photo.public_id)
        res.status(200).send('deleted')
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const changePhoto = async (req, res) => {
    try {
        console.log(req.body);
        const photo = await PhotoSchema.findByIdAndUpdate(req.params.id, req.body)
        res.send('updated')
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}