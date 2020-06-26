interface User {
	name: string
	age: number
}

interface Employee {
	salary: number
}

let person: User & Employee;

person = {
	age   : 32,
	name  : 'John',
	salary: 100
}

let person2 : User | Employee;


(<Employee>person2).salary;   //type cast
(person2 as User).age;   //type cast








