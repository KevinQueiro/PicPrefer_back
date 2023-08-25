import app from './app.js'
import { connectToDB } from './utils/mongoose.js'

async function main() {
  try {
  await connectToDB();
  app.listen(4000)
  console.log('server on port 4000')  
  } catch (error){
    console.log(error)
  }
}

main()
