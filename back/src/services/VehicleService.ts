import { AppDataSource } from "../config/data-source.ts";
import  VehicleDto from "../dto/VehicleDto"
import { Vehicle } from "../entities/Vehicle";

export const getVehiclesService = async () => {
    const vehicles = await AppDataSource.getRepository(Vehicle).find();
    return vehicles;
  };

  export const createVehicleService = async (vehicleDto: VehicleDto)=> {
  
    const vehicle = await AppDataSource.getRepository(Vehicle).create(vehicleDto);
    const result = await AppDataSource.getRepository(Vehicle).save(vehicle);
    
    return vehicle;
  };