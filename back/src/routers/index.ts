import { Router } from "express";
import {createUser, getUsers, deleteUser, getUserById } from "../controllers/userController"
import auth from "../middlewares/auth";
import { createVehicle, getVehicles } from "../controllers/VehicleController";
import { getAppointments, createAppointment, getAppointmentById } from "../controllers/appointmentController";

const router = Router();

router.get("/user",auth,getUsers);
router.post("/user", createUser);
router.get("/user/:id", getUserById);
router.delete("/user",deleteUser);

router.get("/vehicles",getVehicles);
router.post("/vehicles",createVehicle);

router.get("/appointments", getAppointments);
router.post("/appointment", createAppointment)
router.get("/appointment/:id", getAppointmentById)

export default router;