export interface Person {
	name: string
	age: number
	isAlive: boolean
	address: {
		street: string
		number: number
		city: string
	}
	children?: Person[]
}

interface Employee extends Person{
	salary:number
	startDate:Date
}
let employee: Employee;


export function printUser(user: Person): void {
	console.log(user.age);
	console.log(user.name);
	console.log(user.isAlive);
}

let john: Person = {
	address: {
		street: 'Jaffa',
		number: 5,
		city  : 'Tel Aviv'
	},
	age    : 13,
	isAlive: true,
	name   : "John",
}

printUser(john)

let someObject = {
	address    : {
		street: 'Jaffa',
		number: 5,
		city  : 'Tel Aviv'
	},
	age        : 13,
	isAlive    : true,
	name       : "John",
	dateOfBirth: new Date()
};

printUser(someObject)

