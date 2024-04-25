import  express   from "express";
const cors = require('cors');
import router from "./routers";
const server = express();
server.use(cors()); // Habilitar CORS para todas las solicitudes
server.use(express.json());
server.use(router);
export default server;