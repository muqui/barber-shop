interface AppointmentDto{
    
    date: string;
    hour: string;
    status: boolean;
    subject: string;
    user: {
      id: number;
    };
}

export default AppointmentDto;