import app from './app.js'
import { connectToDB } from './utils/mongoose.js'

async function main() {
  try {
  await connectToDB();
  app.listen(8080)
  console.log('server on port 8080')  
  } catch (error){
    console.log(error)
  }
}

main()
