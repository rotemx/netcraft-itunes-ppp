import {SongResult} from "../../types/interfaces/itunes-api-result";

declare let $: JQueryStatic;

export class DomController {
	songListContainer: JQuery;
	searchButton: JQuery;
	searchInput: JQuery;
	
	onSearch: (search: string) => void;
	
	constructor() {
		window['domCtrl']      = this;
		this.songListContainer = $('#results-wrapper')
		this.searchButton      = $('#searchButton')
		this.searchInput       = $('#searchInput')
		
		this.searchInput
		    .on('keyup', (ev) => {
			    this.onSearchClicked()
			    // if (ev.key === 'Enter') {
			    // }
		    });
		this.searchButton.click(() => this.onSearchClicked())
	}
	
	private onSearchClicked() {
		const searchTerm = <string>this.searchInput.val();
		if (!searchTerm) {
			// alert('Please enter a search term')
			return
		}
		if (typeof this.onSearch === 'function') {
			console.log('onSearch event is working!');
			this.onSearch(searchTerm)
		}
	}
	
	addSongToDom(song: SongResult): void {
		const div = $(`
				<div>
					<div class="artist">
						${song.artistName}
					</div>
					<div class="track-name">
						${song.trackName}
					</div>
					<div class="song-player">
						<audio
						preload="auto"
						controls
						type="audio/x-m4a"
						src="${song.previewUrl}"
						>
						</audio>
					</div>
				</div>
					`);
		
		this.songListContainer.append(div)
	}
	
	async init() {
		console.log('Do something asyncy..');
	}
	
	clearSongList() {
		this.songListContainer.empty();
	}
}
