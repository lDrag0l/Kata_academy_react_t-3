import { add, format } from 'date-fns';

export const formateDate = (date, duration) => {
    let startDate = new Date(date);
    let endDate = add(startDate, { minutes: duration })

    return {
        start: format(startDate, 'HH:mm'),
        arrival: format(endDate, 'HH:mm')
    }
}
export function formatDuration(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    return `${hours}ч ${remainingMinutes}м`;
}