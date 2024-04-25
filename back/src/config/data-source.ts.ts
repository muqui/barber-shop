import { DataSource } from "typeorm"
import { User } from "../entities/User"
import { Vehicle } from "../entities/Vehicle"
import { Appointment } from "../entities/Appointment"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Fedora12",
    database: "barber_shop",
    synchronize: true,
    logging: true,
    //dropSchema: true,  //vacia la base de datos
    entities: [User, Appointment],
    subscribers: [],
    migrations: [],
})