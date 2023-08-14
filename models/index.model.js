import mongoose from 'mongoose';

const ImgSchema = mongoose.Schema({
  public_id: String,
  secure_url: String
})

const PhotoSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  prefered: {
    type: Number
  },
  image: [ImgSchema]
})

export default mongoose.model('image', PhotoSchema)