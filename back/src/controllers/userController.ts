import { Request, Response } from "express";
import {createUserService, getUsersService, deleteUserService, getUserByIdService, findUserByUsername, findUserByEmail} from "../services/userService";
//import IUser from "../interfaces/IUser";
import { User } from "../entities/User";

export const getUsers = async (req: Request, res: Response)=>{
    const users: User[] = await getUsersService();
    res.status(201).json(users);

}


interface ErrorResponse {
    message: string;
}

export const createUser = async (req: Request, res: Response) => {
    try {
        const userData = req.body;
        const errors: ErrorResponse[] = [];

        // Verificar si el nombre de usuario ya existe
        const existingUserByUsername = await findUserByUsername(userData.username);
        if (existingUserByUsername) {
            errors.push({ message: 'El nombre de usuario ya está en uso.' });
        }

        // Verificar si el correo electrónico ya existe
        const existingUserByEmail = await findUserByEmail(userData.email);
        if (existingUserByEmail) {
            errors.push({ message: 'El correo electrónico ya está en uso.' });
        }

        if (errors.length > 0) {
            return res.status(400).json({ errors });
        }

        // Si no hay conflictos, crear el nuevo usuario
        const newUser = await createUserService(userData); 
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error al crear usuario:', error);
        return res.status(500).json({ message: 'Se produjo un error al crear el usuario.' });
    }
};





export const deleteUser = async(req: Request, res: Response) =>{
 const {id} = req.body;
 await deleteUserService(id);
 res.status(200).json({message: "Eliminado correctamente"});
}

export const getUserById = async (req: Request, res: Response) =>{
    const {id} = req.params
    const user: User | null = await getUserByIdService(Number(id));
    res.status(200).json(user);
}