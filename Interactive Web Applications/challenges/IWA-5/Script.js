const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNIN = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = '0'

 
 const location1 = 'SouthAfrica'
 const location2 = 'Namibia'
 const location3 = 'Other'
 const location4 = 'NorthKorea'
 const location = (location1 || location2 || location3 || location4)
 const shippingSA = 400
 const shippingNAM = 600 
 const shippingOther = 800 
 const currencySA = 'R'
 const currencynam ='$'
 const currencyOther = '$'
 


let shoes = 300 * 1
let toys = 100 * 7
let shirts = (50 * 'NONE_SELECTED')
let batteries = (5 * 2)
let pens = 5 * 'NONE_SELECTED' 


if (location === location1 ) {
	console.log(currencySA +( shippingSA + shoes + toys + batteries))
} else if(location === location2){
	console.log(currencynam + (shippingNAM + shoes + toys + shirts + batteries + pens))
} else if(location === location3){
	console.log(currencynam + shippingNAM + shoes + toys + shirts + batteries + pens)
} else if(location === location4){
	console.log(BANNED_WARNIN)
}
console.log(location)
	