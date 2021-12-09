import { DaysType, SalonType } from '@/types';

export function parseScheduleHours(hour: string) {
    const h = Array.from(hour);
    return `${h[0]}${h[1]}:${h[2]}${h[3]}`;
}

export default function parseScheduleText(salon: SalonType) {
    const today = new Date().toLocaleString('en-us', { weekday: 'long' }) as DaysType;
    const todaysSchedule = salon.schedule[today];
    if (todaysSchedule.length > 0) {
        const lastSchedule = todaysSchedule.slice(-1).pop();
        return `Öppet till ${lastSchedule && parseScheduleHours(lastSchedule.Finish)} idag`;
    }
    return 'Stängd idag';
}
