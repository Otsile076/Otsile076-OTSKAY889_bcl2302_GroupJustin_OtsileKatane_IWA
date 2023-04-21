let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below


const CalcUser = () => { 
    const isString = typeof String === 'numerical-string'
    const calculatedAsNumber = isString ? parseInt(calculated) : calculated
    const calculated = calculatedAsNumber + 1 
    console.log(calculated)
}

const calcUser = () => {
  if (calculated >= 2) user = 'John'
  if (calculated > 2) state = 'requesting'
  if (calculated > 3) state = 'idle'
  
}

const checkUser = () => {
	if (user && state === 'requesting') {
		console.log(`User: ${user} ${calcUser}`)
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