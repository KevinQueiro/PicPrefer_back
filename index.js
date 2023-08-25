import app from './app.js'
import { connectToDB } from './utils/mongoose.js'

async function main() {
  try {
  await connectToDB();
  app.listen(port)
  console.log(`server on port ${port}`)  
  } catch (error){
    console.log(error)
  }
}

main()
