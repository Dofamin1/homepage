const getDate = (timePoint = null) => {
    const date = timePoint ? new Date(timePoint) : new Date() ;
    return {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate()
    }
}

const getDateDifference = ( timeBefore, timeAfter ) => {;
    let yearDif = timeAfter.year - timeBefore.year;
    let monthDif = timeAfter.month - timeBefore.month;
    let dayDif = timeAfter.day - timeBefore.day;
    if(monthDif < 0) {
        yearDif = 0;
        monthDif = (12 - timeBefore.month) + timeAfter.month
    }

    if(dayDif < 0) {
        monthDif -= 1;
        dayDif = (getDayCountOfMonth(timeBefore.year, timeBefore.month) - timeBefore.day) + timeAfter.day
    }
    return {
        yearDif, 
        monthDif, 
        dayDif
    }
}
const getDayCountOfMonth = (year, month) => {
    const date = new Date(year, month + 1, 0);
    return date.getDate();
}



