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
