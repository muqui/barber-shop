import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"

@Entity({name : "appointments"})
export class Appointment{
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'date' })
    date: Date

    @Column()
    hour : string

    @Column({ type: 'boolean' })
    status: boolean

    @Column()
    subject: string 

    @ManyToOne(() => User, (user) => user.appointments)
    @JoinColumn({ name: "user_id" })
    user: User;

  
}