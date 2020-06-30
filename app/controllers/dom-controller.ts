import {SongResult}    from "../../types/interfaces/itunes-api-result";
import {ApiController} from "./api-controller";

declare let $: JQueryStatic;

export class DomController {
	container: JQuery;
	searchButton: JQuery;
	searchInput: JQuery;
	
	constructor(public apiCtrl:ApiController) {
		window['domCtrl'] = this;
		
		
		this.container    = $('#results-wrapper')
		this.searchButton = $('#searchButton')
		this.searchInput  = $('#searchInput')
		
		this.searchButton.click(() => this.onSearchClick)
	}
	
	async onSearchClick() {
		const searchTerm = this.searchInput.val();
		
		if (!searchTerm){
			alert('Please enter a search term')
			return
		}
		
		let songs;
		try {
			songs = (await this.apiCtrl.getResults(<string>searchTerm)).results;
			
		} catch (e) {
			console.error(e);
		}
		songs.forEach(song => this.addSongToDom(song))
		
		
	}
	
	addSongToDom(song: SongResult): void {
		const div = `
				<div class="song-div">
					${song.artistName} - ${song.trackName}
				</div>
					`;
		
		this.container.append(div)
	}
	
	async init() {
		console.log('Do something asyncy..');
	}
}
