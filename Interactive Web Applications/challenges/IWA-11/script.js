const_1 = {
 root: document(order1),
 biscuits: document(biscuits),
 donuts: document(donuts),
 pancakes: document(pancakes),
 status: document(status)
}
const_2 = {
root: document(order2),
biscuits: document(biscuits),
donuts: document(donuts),
pancakes: document(pancakes),
status: document(status)
}
const_3 = {
root: document(order3),
biscuits: document(biscuits),
donuts: document(donuts),
pancakes: document(pancakes),
status: document(status)
}
[1-biscuits]= [_1].root.biscuits,
[1-donuts ]= [_1].root.donuts,
[1-pancakes] = [_1].root.pancakes,
[1-status] = [_1].root.status ? Delivered : Pending

[2-biscuits]= [_2].root.biscuits,
[2-donuts] = [_2].root.donuts,
[2-pancakes] = [_2].root.pancakes,
[2-status] = [_2].root.status ? Delivered : Pending

[3-biscuits]= [_3].root.biscuits,
[3-donuts] = [_3].root.donuts,
[3-pancakes] = [_3].root.pancakes,
[3-status] = [_3].root.status ? Delivered : Pending
//
//const order_1 = document.querySelector('[data-key= "order1"]')
//const order_2 = document.querySelector('[data-key= "order2"]')
//const order_3 = document.querySelector('[data-key= "order3"]')
//console.log(order_3)