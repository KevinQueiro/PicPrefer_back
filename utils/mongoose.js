import mongoose from 'mongoose';

export async function connectToDB() {
  try {
  await mongoose.connect('mongodb://localhost:27017/picprefer');
    console.log('mongodb connected')
  } catch (error){
    console.log(error)
  }
}