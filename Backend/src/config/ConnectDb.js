import mongoose from "mongoose";

export const ConnectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        throw new Error("Error connecting to MongoDB")
    }
}
