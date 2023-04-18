// script.js

const add = (a, b) => { example1.internal.b + example1.internal.c }

const multiply = (a, b) => { (example2.internal.a + example2.internal.b) * example2.internal.c }

const internal = () => {
	console.log(add)
	return 
}

// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate()
example2.calculate()