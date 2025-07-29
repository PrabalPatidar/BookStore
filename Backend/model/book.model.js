import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    title:String,
    image:String
})
const Book = mongoose.model("book",bookSchema);

export default Book;    