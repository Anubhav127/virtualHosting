import { app } from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db/dbConfig.js";

dotenv.config({
    path: "./env"
})

connectDB()
.then(() => {
    
        app.listen(process.env.PORT || 3000, () => {
            console.log(`Server is running at port ${process.env.PORT}`);
            
        })
})
.catch((err) => {
    console.log("Mongodb connection is failed !!! ", err);
})