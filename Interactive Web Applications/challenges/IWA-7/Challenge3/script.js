const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line
let leoNewBalance = leoBalance*-1
let sarahNewBalance = sarahBalance*-1
const str = leoSurname.trimEnd()
const str2 = sarahName.trimEnd()
const owe = sarahNewBalance.toFixed(2);
const owed = ("total amount oewd: " + 'R' + parseInt(leoNewBalance + sarahNewBalance))
const leo = `${leoName} ${str} (Owed R${leoNewBalance})`
const sarah = `${str2} ${sarahSurname} (Owed R ${owe})`
const total = "Total amount owed: "
const result = (`${leo}\n ${sarah}\n\n ${divider} \n ${owed} \n ${divider}`)

//console.log(leo)
//console.log(sarah)
console.log(result)