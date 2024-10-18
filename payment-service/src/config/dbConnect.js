import mongoose from 'mongoose'

export const dbConnect = async()=>{
    try {
        const mongoString = process.env.MONGO_STRING
      const connection =   await mongoose.connect(mongoString)
      if(connection){
        console.log('Db connected Succesfullly')
      }
    } catch (error) {
        console.error(error);
    }
}