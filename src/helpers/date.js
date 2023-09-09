export const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

export const explodeDate = (dateStr) => {
    return dateStr.split("-").map(val => Number(val))
}

export const dateHeader = (dateString) => {
    let [year, month, day] = dateString.split("-").map(val => Number(val))
    return `${months[month-1]} ${day}, ${year}`
}