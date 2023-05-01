import mongoose from "mongoose";

mongoose.connect("mongodb+srv://jonathanmoreira147:123@cluster0.mpbnfey.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;