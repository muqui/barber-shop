import server from "./server";
import {PORT } from "./config/envs";
import "reflect-metadata"
import { AppDataSource } from "./config/data-source.ts";

AppDataSource.initialize()
.then( res =>{
    console.log("conexion a la base de datos OK");
    server.listen(PORT, ()=>{
    console.log(`Server on port ${PORT}`);
})
})

/*server.listen(PORT, ()=>{
    console.log(`Server on port ${PORT}`);
})*/