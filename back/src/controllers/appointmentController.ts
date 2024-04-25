
import { Request, Response } from "express";
import {getAppointmentService, createAppointmentService, getAppointmentByIdService } from "../services/AppointmentService";
import { Appointment } from "../entities/Appointment";

export const getAppointments = async (req: Request, res: Response)=>{
    const appointments: Appointment[] = await getAppointmentService();
    res.status(201).json(appointments);

}

export const createAppointment = async (req: Request, res: Response) => {
    try {
        const appointmentData = req.body;
        const newAppointment = await createAppointmentService(appointmentData);
        res.status(201).json(newAppointment);
    } catch (error: any) {
        console.error('Error al crear cita:', error);
        return res.status(500).json({ message: error.message || 'Se produjo un error al crear la cita.' });
    }
}


//getAppointmentById
export const getAppointmentById = async (req: Request, res: Response)=>{
    const appointmentId = parseInt(req.params.id);
    const appointments: Appointment[] = await getAppointmentByIdService(appointmentId);
    res.status(201).json(appointments);

}

/*
export const createAppointment = async (req: Request, res: Response)=>{

    const appointmentData = req.body;
    const { date, hour, status, subject, userId } = req.body;
    console.log(appointmentData);
    const newAppointment = await createAppointmentService(
        {
        date,
        hour,
        status,
        subject,
        userId
       }
      
    ); 
    res.status(201).json(newAppointment);

}
*/