//warnings not declared
const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNIN = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = '0'

//location declared wrongly. location should be equal to RSA
let location = 'RSA'  //declared location as "RSA"
let shipping = 400  // declared "shipping"
let currency = 'R'  //declared "currency" and added 'or' statements


//incorrect sign used
//numberFormatter.format(5000)

//fixed the structuring of the boolean
if (location =='RSA') {
    currency == 'R'
    shipping = 400
        if (location == 'NAM'){  //declared loaction as 'NAM'
            currency == '$'  //added currency value
             const shipping = 600
    }
        else {
            currency == '$'  //added currency value
            let shipping = 800
    }
}

let shoes = 300 * 1
let toys = 100 * 5  
let shirts = 150 * NONE_SELECTED
let batteries = 35 * 2  
let pens = 5 * NONE_SELECTED
if (shoes + batteries + pens + shirts + toys >= 1000 && currency === 'R' ) {  //added the value of 1000 and the currency
        if (location == 'NAM' || location == 'RSA' && customers <= 1) {
            shipping = 0
    }
        else {
            console.log(FREE_WARNING)
    }
	
	}
if(location === 'NK'){  //declared location as 'NK'
    shipping = null
    currency = null  //declared shipping as 'null'
    console.log(BANNED_WARNING)
	
}
console.log('price =', currency, shoes + batteries + pens + shirts + toys + shipping)
