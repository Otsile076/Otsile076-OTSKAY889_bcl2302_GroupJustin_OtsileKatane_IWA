let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below


const logCalc = () => { 
    const isString = typeof calculated === 'numerical-string';
    const calculatedAsNumber = isString ? parseint(calculated) : calculated;
    calculated = calculatedAsNumber + 1;
  
}

const  calcUser = () => {
  logCalc();
  if (logCalc >= 2) user = 'John';
  if (logCalc >= 2) state = 'state'
  if (logCalc >= 3) state = 'idle';

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