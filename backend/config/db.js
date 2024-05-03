import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://sarojmishra:Sarojmishra@6393@cluster0.vcnzjgl.mongodb.net/sarojmishra?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log("DataBase Connected"));
}