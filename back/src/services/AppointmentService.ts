
import { AppDataSource } from "../config/data-source.ts";
import { Appointment } from "../entities/Appointment";
import  AppointmentDto  from "../dto/AppointmentDto";
import { User } from "../entities/User";

export const getAppointmentService = async () => {
    const appointments = await AppDataSource.getRepository(Appointment).find();
    return appointments;
  };
//getAppointmentByIdService
export const getAppointmentByIdService = async (id: number) => {
  const appointments = await AppDataSource.getRepository(Appointment).find({ where: { user: { id: id } } });
  return appointments;
};





  export const createAppointmentService = async (data: AppointmentDto)=> {

  

    
    const appointment = await AppDataSource.getRepository(Appointment).create(data);
    const result = await AppDataSource.getRepository(Appointment).save(appointment);
    
    return appointment;
  };