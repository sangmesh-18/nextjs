import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL!);
        const connection=mongoose.connection;

        connection.on("connected", () => {
            console.log(`MongoDB Connected at ${process.env.MONGO_URL}`);
        })
        connection.on("error", (error) => {
            console.error(`MongoDB Error: ${error.message}`);
            process.exit();
        })
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        } else {
            console.error(error);
        }
        process.exit(1);
    }
};