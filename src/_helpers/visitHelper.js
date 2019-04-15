import { addMinutes, subMinutes, isAfter, isEqual } from "date-fns";

export const visitHelper = {
    getAvailableVisitsForDate,
};

function getAvailableVisitsForDate(selectedDate, workingHoursInfo, doctorsVisits) {
    const dayNumber = selectedDate.getDay();
    var [workingHoursForDay] = workingHoursInfo.filter(day => day.day === dayNumber);

    if (workingHoursForDay)
    {
        const firstVisit = new Date(
            selectedDate.getFullYear(), 
            selectedDate.getMonth(), 
            selectedDate.getDate(), 
            workingHoursForDay.start.hour, 
            workingHoursForDay.start.minute);

        const lastVisit = subMinutes(new Date(
            selectedDate.getFullYear(),
            selectedDate.getMonth(),
            selectedDate.getDate(),
            workingHoursForDay.end.hour,
            workingHoursForDay.end.minute), workingHoursForDay.interval);

        const visits = generateAllVisitsForDoctor(firstVisit, lastVisit, workingHoursForDay.interval);
        return visits;
    }

    return [];
}

function generateAllVisitsForDoctor(firstVisit, lastVisit, interval) {
    const visits = [];
    let newDate;
    let counter = 1;
    
    do {
        newDate = addMinutes(firstVisit, interval * counter);
        visits.push(newDate);
        counter += 1;
    } while(!isAfter(newDate, lastVisit) && !isEqual(newDate, lastVisit));
    return visits;
}