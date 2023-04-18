let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below


const logCalc = () => { 
    const isString = 'numerical-string' 
    const calculatedAsNumber = isString ? parseInt(calculated) : calculated
    calculated === calculatedAsNumber + 1 
}

const calcUser = () => {
  if (calculated > 2) {
    console.log('John')
  } else if(calculated > 2) {
    console.log('requesting')
  } else console.log('idle')
 }
  
 
const checkUser = () => {
	if (user && state === 'requesting') {
		console.log(`User: ${user} (${calculated})`)
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