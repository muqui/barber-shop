interface UserDto{
    id: number;
    username: string;
    email: string;
    password: string;
    fechaRegistro: Date;
    active: boolean;
}

export default UserDto;