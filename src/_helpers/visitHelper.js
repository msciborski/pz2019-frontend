import { addMinutes, isAfter } from "date-fns";

export const visitHelper = {
    getAvailableVisitsForDate,
};

function getAvailableVisitsForDate(selectedDate, workingHoursInfo, doctorsVisits) {
    const dayNumber = selectedDate.getDay();
    var [workingHoursForDay] = workingHoursInfo.filter(day => day.day === dayNumber);

    if (workingHoursForDay)
    {
        const visits = [];
        const firstVisit = new Date(
            selectedDate.getFullYear(), 
            selectedDate.getMonth(), 
            selectedDate.getDate(), 
            workingHoursForDay.start.hour, 
            workingHoursForDay.start.minute);
        const lastVisit = new Date(
            selectedDate.getFullYear(),
            selectedDate.getMonth(),
            selectedDate.getDate(),
            workingHoursForDay.end.hour,
            workingHoursForDay.end.minute);

        let newDate;
        let counter = 1;
        do {
            newDate = addMinutes(firstVisit, workingHoursForDay.interval * counter);
            visits.push(newDate);
            counter += 1;
        } while(!isAfter(newDate, lastVisit));
        
    }

    return [];

}