import mongoose from 'mongoose';

const PhotoSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  prefered: {
    type: Number,
    default: 0
  },
  author: {
    type: String,
    trim: true
  },
  public_id: {
    type: String
  },
  secure_url: {
    type: String
  },
  sid: {
    type: Number
  },
  authorized: {
    type: Boolean,
    default: false
  },
  new: {
    type: Boolean,
    default: true
  }
})

export default mongoose.model('image', PhotoSchema)