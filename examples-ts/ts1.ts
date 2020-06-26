let camelCase;
let snake_case;

interface User {
	name: string
	age: number
}

class UserManager {
	getUser(id: string): User {
		// throw new Error('Not implemented yet')
		return null
		// console.log('this will never happen');
	}
}


function returnSeven(): number {
	return 7
}

function returnSomeNumber() {
	return returnSeven
}

let myVar = returnSomeNumber()


enum ResponseStatuses {
	Ok    = "ok",
	Error = "error"
}

let response: ResponseStatuses = ResponseStatuses.Error;
response                       = ResponseStatuses.Ok;

let responseStatus: "ok" | "error"; //union type


type BooleanFunction = (param1: string, param2: number) => boolean;

type NumberOrString = number | string;

let num:NumberOrString;

let myFunc: BooleanFunction;

myFunc = (p1: string, p2: number) => true;






























