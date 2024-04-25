import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User";

@Entity({name : "vehicles"})
export class Vehicle{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100})
    brand: string;

    @Column({length: 100})
    color: string;

    @Column({length: 100})
    model: string;

    @Column({length: 100})
    year: string;

   // @ManyToOne(() => User, user => user.vehicles)
  //  user: User;
}