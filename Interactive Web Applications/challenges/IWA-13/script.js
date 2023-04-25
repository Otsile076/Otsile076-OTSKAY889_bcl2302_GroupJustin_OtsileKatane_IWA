let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below


const logCalc = () => { 
    const isString = 'numerical-string';
    const calculatedAsNumber = isString ? parseint(calculated) : calculated;
    calculated = calculatedAsNumber + 1;
    return calculated;
}

const  calcUser = () => {
  if (logCalc >= 1) user = 'John';
  if (logCalc >= 2) state = 'requesting';
  if (logCalc >= 3) state = 'idle';
  return calcUser;
}

const  checkUser = () => {
	if (user || state === 'requesting') {
		console.log(`User: ${user} ${calculated}`)
	}
}

// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()