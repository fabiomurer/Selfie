const getFirstDayOfWeek = (date: Date): Date => {
    const currentDay = date.getDay();
    const offsetFromStartOfWeek = currentDay === 0 ? 6 : currentDay - 1;
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - offsetFromStartOfWeek);
    return startOfWeek;
};

const getLastDayOfWeek = (date: Date): Date => {
    const currentDay = date.getDay();
    const offsetFromEndOfWeek = currentDay === 0 ? 0 : 7 - currentDay;
    const endOfWeek = new Date(date);
    endOfWeek.setDate(date.getDate() + offsetFromEndOfWeek);
    return endOfWeek;
};

const getFirstDayOfMonth = (date: Date): Date => {
    return new Date(date.getFullYear(), date.getMonth(), 1);
};

const getLastDayOfMonth = (date: Date): Date => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
};

const formatDayMonth = (date: Date): string => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    return `${day}/${month}`;
};

const getStartOfCurrentPeriod = (date: Date, view: string): Date => {
    if (view === 'day') {
        const startOfDay = new Date(date);
        startOfDay.setHours(0, 0, 0, 0);
        return startOfDay;
    } else if (view === 'week') {
        const startOfWeek = getFirstDayOfWeek(new Date(date));
        startOfWeek.setHours(0, 0, 0, 0);
        return startOfWeek;
    } else {
        const startOfMonth = getFirstDayOfMonth(new Date(date));
        startOfMonth.setHours(0, 0, 0, 0);
        return startOfMonth;
    }
};

const getEndOfCurrentPeriod = (date: Date, view: string): Date => {
    if (view === 'day') {
        const endOfDay = new Date(date);
        endOfDay.setHours(23, 59, 0, 0);
        return endOfDay;
    } else if (view === 'week') {
        const endOfWeek = getLastDayOfWeek(new Date(date));
        endOfWeek.setHours(23, 59, 0, 0);
        return endOfWeek;
    } else {
        const endOfMonth = getLastDayOfMonth(new Date(date));
        endOfMonth.setHours(23, 59, 0, 0);
        return endOfMonth;
    }
};

const getDayOfWeek = (date: Date): string => {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return daysOfWeek[date.getDay()];
};

const isWeekend = (date: Date): boolean => {
    return date.getDay() === 0 || date.getDay() === 6;
};

const getStartOfDay = (date: Date): Date => {
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    return startOfDay;
};

const getEndOfDay = (date: Date): Date => {
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 0, 0);
    return endOfDay;
};

const sameDate = (date1: Date, date2: Date): boolean => {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    return d1.toDateString() === d2.toDateString();
};

const prevCurrentDate = (currentDate: Date, view: string): Date => {
    let newDate: Date;
    if (view === 'day') {
        newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 1);
    } else if (view === 'week') {
        newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 7);
    } else {
        newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    }
    return newDate;
};

const nextCurrentDate = (currentDate: Date, view: string): Date => {
    let newDate: Date;
    if (view === 'day') {
        newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1);
    } else if (view === 'week') {
        newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 7);
    } else {
        newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
    }
    return newDate;
};

const roundTime = (date: Date): Date => {
    let minutes = Math.round(date.getMinutes() / 5) * 5;
    let hours = date.getHours();
    hours = minutes === 60 ? hours + 1 : hours;
    minutes = minutes === 60 ? 0 : minutes;

    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), hours, minutes);
};

const moveAheadByHours = (date: Date, hours: number): Date => {
    return new Date(date.getTime() + hours * 60 * 60 * 1000);
};

const moveAheadByDays = (date: Date, days: number): Date => {
    return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
};

const formatPeriodString = (currentDate: Date, view: string): string => {
    if (view === 'day') {
        return formatDayMonth(currentDate);
    }
    else if (view === 'week') {
        const firstDay = getFirstDayOfWeek(currentDate);
        const lastDay = getLastDayOfWeek(currentDate);
        return `${formatDayMonth(firstDay)} - ${formatDayMonth(lastDay)}`;
    }
    else {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const month = months[currentDate.getMonth()];
        const year = currentDate.getFullYear();
        return `${month} ${year}`;
    }
};

export default {
    getFirstDayOfWeek,
    getLastDayOfWeek,
    getFirstDayOfMonth,
    getLastDayOfMonth,
    formatDayMonth,
    getStartOfCurrentPeriod,
    getEndOfCurrentPeriod,
    getDayOfWeek,
    isWeekend,
    getStartOfDay,
    getEndOfDay,
    sameDate,
    prevCurrentDate,
    nextCurrentDate,
    roundTime,
    moveAheadByHours,
    moveAheadByDays,
    formatPeriodString
};