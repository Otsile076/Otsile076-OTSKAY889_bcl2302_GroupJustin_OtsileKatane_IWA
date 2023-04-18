const order1Element = document.querySelector('[data-key="order1"]');
const order2Element = document.querySelector('[data-key="order2"]');
const order3Element = document.querySelector('[data-key="order3"]');
//const biscuits1 = order_1.root.querySelector('.biscuits.count');
//const donuts1 = order_1.querySelector('.donuts.count');
//const pancakes1 = order_1.querySelector('.pancakes.count');
//const status1 = order_1.querySelector('.status dd');
//const order2 = document.querySelector('[data-key="order2"]');
//const biscuits2 = order_2.querySelector('.biscuits.count');
//const donuts2 = order_2.querySelector('.donuts.count');
//const pancakes2 = order_2.querySelector('.pancakes .count');
//const status2 = order_2.querySelector('.status dd');
//const order3 = document.querySelector('[data-key="order3"]');
//const biscuits3 = order_3.querySelector('.biscuits.count');
//const donuts3 = order_3.querySelector('.donuts.count');
//const pancakes3 = order_3.querySelector('.pancakes.count');
//const status3 = order_3.querySelector('.status dd');
console.log(order1Element)
console.log(order2Element)
console.log(order3Element)

const order_1 = {
    biscuits: order1Element.dataset.biscuits,
    donuts: order1Element.dataset.donuts,
    pancakes: order1Element.dataset.pancakes,
     status: order1Element.dataset.status,

}
console.log(order_1.biscuits)
const order_2 = {
    biscuits: order2Element.dataset.biscuits,
    donuts: order2Element.dataset.donuts,
    pancakes: order2Element.dataset.pancakes,
     status: order2Element.dataset.status,
}
console.log(order_2.biscuits)
const order_3 = {
    biscuits: order3Element.dataset.biscuits,
    donuts: order3Element.dataset.donuts,
    pancakes: order3Element.dataset.pancakes,
     status: order3Element.dataset.status,
 
}
console.log(order_3.biscuits)
const biscuits_1 = order_1.root.biscuits;
const donuts_1 = order_1.root.donuts;
const pancakes_1 = order_1.root.pancakes;
const status_1 = order_1.root.status ? Delivered : 'Pending';

const biscuits_2 = order_2.root.biscuits;
const donuts_2 = order_2.root.donuts;
const pancakes_2 = order_2.root.pancakes;
const status_2 = order_2.status ? Delivered : 'Pending';

const biscuits_3 = order_3.root.biscuits;
const donuts_3 = order_3.root.donuts;
const pancakes_3 =order_3.root.pancakes;
const status_3 = order_3.root.status ? Delivered : 'Pending';



biscuits1.innerText = order_1.dataset.biscuits
donuts1.innerText = order_1.dataset.donuts
pancakes1.innerText = order_1.dataset.pancakes
status1.innerText = order_1.dataset.status = false ? "Delivered" : "Pending";
biscuits2.innerText = order_2.dataset.biscuits
donuts2.innerText = order_2.dataset.donuts
pancakes2.innerText = order_2.dataset.pancakes
status2.innerText = order_2.dataset.status = false ? "Delivered" : "Pending";
biscuits3.innerText = order_3.dataset.biscuits
donuts3.innerText = order_3.dataset.donuts
pancakes3.innerText = order_3.dataset.pancakes
status3.innerText = order_3.dataset.status = true ? "Delivered" : "Pending";