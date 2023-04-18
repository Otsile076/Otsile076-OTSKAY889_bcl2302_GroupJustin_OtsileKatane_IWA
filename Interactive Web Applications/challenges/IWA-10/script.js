const currentYear = new Date().getFullYear()


const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment
if (futureId === null) {
 console.log(`ID ${futureId} not created yet`)
}

let copied = [6] 
 copied = {
    name: 'x-mas',
    date: new Date(`25 December ${currentYear}`),
    hours: 0,
    minutes:0,
   }
const correctDate = copied.date
const correctHours = copied.hours 
const CorrectMinutes = copied.minutes 
const isEarlier = copied.date < holidays[6].date
console.log('New date is earlier:', isEarlier)
if (isEarlier) copied.date = correctDate
console.log('ID change:', holidays[6].id === copied.id)
console.log('Name change:', copied.name)
console.log('Date change:', copied.date)

const firstHolidayTimestamp = { 
    holidays0: date.getTime(),
    holidays1: date.getTime(),
    holidays2: date.getTime(),
    holidays3: date.getTime(),
    holidays4: date.getTime(),
    holidays5: date.getTime(),
    holidays6: date.getTime(),
    holidays7: date.getTime(),
    holidays8: date.getTime(),
} 

const lastHolidayTimestamp = { 
    holidays0: date.getTime(),
    holidays1: date.getTime(),
    holidays2: date.getTime(),
    holidays3: date.getTime(),
    holidays4: date.getTime(),
    holidays5: date.getTime(),
    holidays6: date.getTime(),
    holidays7: date.getTime(),
    holidays8: date.getTime(),
}

const firstDay = firstHolidayTimestamp.getDate
const firstMonth = firstHolidayTimestamp.getMonth
const lastDay = lastHolidayTimestamp.getDate
const lastMonth = lastHolidayTimestamp.getMonth

console.log(firstDay)
console.log(lastDay)

const randomHoliday = holidays[Math.random]
console.log(randomHoliday.date)
 

 

