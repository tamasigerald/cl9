export type SalonType = {
    id: number;
    name: string;
    price: number;
    url: string;
    phone: string;
    description: string;
    average_rating: number;
    total_ratings: number;
    address: string;
    image: string;
    schedule: WeekScheduleType;
};

type DaysType = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

type ScheduleType = {
    Start: string;
    Finish: string;
};

type WeekScheduleType = {
    [day in DaysType]: ScheduleType[];
};
