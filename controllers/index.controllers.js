import PhotoSchema from '../models/index.model.js'

export const getPhotos = async (req, res) => {
    try {
        const list = await PhotoSchema.find()
        console.log(list);
        res.send(list)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const savePhotos = async (req, res) => {
    try {
        console.log(req.body)
        const newPhoto = new PhotoSchema({
            name: req.body.name,
        })
        const savedPhoto = await newPhoto.save()
        res.send('saved')
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const deletePhoto = async (req, res) => {
    try {
        console.log(req.params.id)
        const photo = await PhotoSchema.findByIdAndDelete(req.params.id)
        res.send('deleted')
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
        return res.status(500).json({message:error.message})
    }
}