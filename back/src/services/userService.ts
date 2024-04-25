
import { AppDataSource } from "../config/data-source.ts";
import UserDto from "../dto/UserDto";

import { User } from "../entities/User";





export const getUsersService = async () => {
  const users = await AppDataSource.getRepository(User).find();
  return users;
};

export const createUserService = async (userDto: UserDto)=> {
  
  const user = await AppDataSource.getRepository(User).create(userDto);
  const result = await AppDataSource.getRepository(User).save(user);
  
  return user;
};

export const deleteUserService = async (id: number): Promise<void> => {
  
};

export const getUserByIdService = async (id: number): Promise<User | null> =>{
  
  const user = await AppDataSource.getRepository(User).findOneBy({id});

  return user;

}



// Función para buscar un usuario por nombre de usuario
export const findUserByUsername = async (username: string): Promise<User | null> => {
  const user = await AppDataSource.getRepository(User).findOne({ where: { username } });

  return user;
  
}

// Función para buscar un usuario por correo electrónico
export const   findUserByEmail = async(email: string): Promise<any> => {
  const user = await AppDataSource.getRepository(User).findOne({ where: { email } });

  return user;
}

/*
export const getUserByIdService = async (id: number): Promise<User | null> =>{
  
  const user = await AppDataSource.getRepository(User).findOneBy({id});

  return user;

}


//let users: IUser[] = [];

/*
let id: number = 1;
export const getUsersService = async () : Promise<User[]>=> {
  const users = await AppDataSource.getRepository(User).find({ relations: ["vehicles"] });
  return users;
};
*/
/*
export const createUserService = async (userData: UserDto)=> {
  //recibir los datos de usuario.
  //Crear un nuevo usuario
  //incluir el nuevo usuario dentro del arreglo
  //retornar el objeto creado
  /*
  const newUser: IUser = {
    id,
    name: userData.name,
    email: userData.email,
    active: userData.active,
  };
  id++;
  users.push(newUser);
  return newUser;
  
  const user = await AppDataSource.getRepository(User).create(userData);
  const result = await AppDataSource.getRepository(User).save(user);
  
  return user;
};
*/
// Definir una interfaz que represente el objeto con usuario y vehículos
/*
interface UserWithVehicles {
  user: User;
  vehicles: Vehicle[];
}
*/

// Función para insertar un usuario con vehículos
/*
export const createUserService = async (userData: UserWithVehicles) => {
  try {
    const userRepository = AppDataSource.getRepository(User);
    const vehicleRepository = AppDataSource.getRepository(Vehicle);
    
    await AppDataSource.manager.transaction(async (transactionalEntityManager) => {
      // Guardar el usuario
      const savedUser = await transactionalEntityManager.save(User, userData.user);

      // Guardar los vehículos asociados al usuario
      await Promise.all(userData.vehicles.map(async (vehicle) => {
        vehicle.user = savedUser; // Vincular el vehículo al usuario guardado
        await transactionalEntityManager.save(Vehicle, vehicle);
      }));
    });
  } catch (error) {
    console.error("Error al insertar usuario y vehículos:", error);
    throw error; // Relanzar el error para que sea manejado en un nivel superior si es necesario
  }
};
*/
/*
export const deleteUserService = async (id: number): Promise<void> => {
  users = users.filter((user: IUser) => {
    return user.id !== id;
  });
};
*/
/*
export const getUserByIdService = async (id: number): Promise<User | null> =>{
  
  const user = await AppDataSource.getRepository(User).findOneBy({id});

  return user;

}
*/