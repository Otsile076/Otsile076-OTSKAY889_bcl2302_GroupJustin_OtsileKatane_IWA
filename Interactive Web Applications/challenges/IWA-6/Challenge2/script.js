const rent = 400;
const tax = '12%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// change only below this line

if((hourOfDay && minuteOfDay === undefined) || (hourOfDay && minuteOfDay === 00)) {
    const tax = parseInt(Number)
	const taxAsDecimal = tax / 100
  const startingAfterTax = salary * (1 - taxAsDecimal)
	const balace = startingAfterTax - transport - food - rent
}
	
console.log(balance.toFixed(2))