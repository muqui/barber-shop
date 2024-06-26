import { Request, Response } from "express";
import { createVehicleService, getVehiclesService } from "../services/VehicleService";
import { Vehicle } from "../entities/Vehicle";

export const getVehicles = async (req: Request, res: Response)=>{
    const vehicles = await getVehiclesService();
    return res.status(200).json(vehicles);

}

export const createVehicle = async (req: Request, res: Response)=>{
    const  {brand, color, model, year,userId } = req.body;
    const newVehicle: Vehicle = await createVehicleService({
        brand,
        color,
        model,
        year,
        userId
      
    });
    return res.status(201).json(newVehicle)

   
}
