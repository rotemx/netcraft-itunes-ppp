import {SongResult} from "../../types/interfaces/itunes-api-result";

declare let $: JQueryStatic;


export class DomController {
	container: JQuery;
	
	constructor() {
		
		this.container = $('#results-wrapper')
		console.log(this.container);
		
	}
	
	addSong(song: SongResult): void {
		const div = `
				<div class="song-div">
					${song.artistName} - ${song.trackName}
				</div>
					`;
		
		this.container.append(div)
		
	}
}
