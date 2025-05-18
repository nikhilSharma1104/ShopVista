import mongoose from "mongoose";


export const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.wpteqcm.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL);
        console.log("DataBase connected Successfully!!");
    }catch(error){
        console.log("Error while connecting with the database", error.message);
    }
}

export default Connection;