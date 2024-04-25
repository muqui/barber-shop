import { Column, Entity, CreateDateColumn, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { Appointment } from "./Appointment"
//import { Vehicle } from "./Vehicle"

@Entity({name : "users"})
export class User{
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 100, unique: true })
    username: string

    @Column({ length: 100, unique: true })
    email : string

    @Column()
    password: string

    @CreateDateColumn({ type: 'timestamp' })
    fechaRegistro: Date;

    @Column()
    active: boolean 

    @OneToMany(() => Appointment, (appointment) => appointment.user)
    appointments: Appointment[];

   // @OneToMany(() => Vehicle, vehicle => vehicle.user)
   // vehicles: Vehicle[];
}