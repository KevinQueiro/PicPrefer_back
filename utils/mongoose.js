import mongoose from 'mongoose';

export async function connectToDB() {
  try {
  await mongoose.connect('mongodb://127.0.0.1:27017/picprefer');
    console.log('mongodb connected')
  } catch (error){
    console.log('mongoose error', error)
  }
}