import {ItunesApiResult} from "../../types/interfaces/itunes-api-result";

const URL = 'https://itunes.apple.com/search?term='

export class ApiController {
	async getResults(search:string):Promise<ItunesApiResult>{
		return (await fetch(URL + search)).json()
	}
}
