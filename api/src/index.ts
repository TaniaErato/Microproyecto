import mongoose from "mongoose";
import app from "./app";

async function main() {
    try {
        await mongoose.connect("mongodb://localhost:27017/Micro") 
        console.log("conexion exitosa")
        app.listen(4000,()=>{
            console.log("aplicacion iniciada con exito")
        })
    } catch (error) {
        console.log("algo salio mal", error)
        
    }
}