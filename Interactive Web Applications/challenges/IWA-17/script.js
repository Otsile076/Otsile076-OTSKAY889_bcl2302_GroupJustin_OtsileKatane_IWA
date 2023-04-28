// scripts.js

const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

// Only edit below 



    //for (0, i, length) {
       // result 
    //}


const createData = () => {
    const current = new Date();
    current.setDate(1);

    let startDay = current.day;
    let daysInMonth = getDaysInMonth(current);
    console.log("days in month :" + daysInMonth);

    

    // const weeks = createArray(5);
    // const days = createArray(7);
        
    
        const result = [];
    
        
    
       
;
        for (let i = 0; i < 5; i++) {
            let weekDaysArray=[];
            for (let j = 0; j < daysInMonth; j++) {
                let value = j - startDay
                let isValid = j > 0 && j <= daysInMonth
    
                let dayToBePush = {
                        dayOfWeek: j + 1,
                        value: isValid && j,
                    }
                    weekDaysArray.push(dayToBePush);
                    
            }
            let weekToBePushed = 
                {
                week: i + 1,
                days: weekDaysArray
            };
            result.push(weekToBePushed);
           
        };
        console.log("result :",result);
        return result;

}

const addCell = (existing, classString, value) => {
    const result = /* html */ `
        <td ${classString}>
            ${value}
        </td>

        ${existing}
    `
}

const createHtml = (data) => {
    console.log("data :" , data);
    let result = '';

    for (let week in [1,2,3,4,5]) {
        let inner = ""
        addCell(inner, 'table__cell table__cell_sidebar', 'Week {week}')
        console.log("dayInData :" , data[week].days)
        for (let item in data) {
            console.log("item :" , item)
            //classString = table__cell
						let isToday = new Date === new Date() + item;
            //let isWeekend = item.dayOfWeek[0] == 1 || item.dayOfWeek[0] == 7;
            let isAlternate = week / 2;
            let isWeekend = true;

            let classString = 'table__cell'

						if (isToday) classString = `${classString} table__cell_today`
            if (isWeekend) classString === '{classString} table__cell_weekend'
            if (isAlternate) classString === '{classString} table__cell_alternate'
            addCell(inner, classString, item)
        }

        result = `<tr>${inner}</tr>`
    }
}

// Only edit above

const current = new Date();
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`


const data = createData();
document.querySelector('[data-content]').innerHTML = createHtml(data)

