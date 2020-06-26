interface PersonDetails{
	age:number
	address:string
}

interface PeopleDictionary {
	[name:string]:PersonDetails
}

const peopleDictionary:PeopleDictionary = {
	'John': {age:21, address: 'Tel Aviv'},
	'James': {age:31, address: 'Tel Aviv'},
	'Jane': {age:41, address: 'Tel Aviv'},
}


