//const was used instead of let
let date = 2050
let status = 'Parent'
let count = 0
 //some monthe were written as "date"
if (date = 2050) {
	console.log("January", 'New Year’s Day')
	console.log("March", 'Human Rights Day')
	console.log("April", 'Family Day','Freedom Day')
    console.log("May", 'Workers day')
	count += 5

	if (status == 'Student') {
	  console.log('June', 'Youth Day')
		count += 1
  }

	console.log('August', 'Women’s Day')
	console.log('September', 'Heritage Day')
	console.log("December", 'Day of Reconciliation', 'Day of Goodwill')
	count += 4

	if (status == "Parent") {
        console.log("December", 'Christmas Day')
		count += 1
  }

 
}

console.log('Your status is:', status)
console.log('The year is:', date)
console.log('The total holidays is:', count)