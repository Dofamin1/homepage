const getDate = (timePoint = null) => {
    const date = timePoint ? new Date(timePoint) : new Date() ;
    return {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate()
    }
}



