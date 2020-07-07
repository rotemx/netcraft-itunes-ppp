import {ApiController} from "./controllers/api-controller.js";
import {DomController} from "./controllers/dom-controller.js";

const
	apiController = new ApiController(),
	domController = new DomController(apiController);

// IIFE
(async () => {
	// DO NOT !
	// $('#searchButton').click(..)
	// document.getElementById...
	
	//maybe...
	// await domController.init()
	
	domController.onSearch = async searchTerm => {
		console.log('This is the onSearch handler function');
		domController.clearSongList()
		let songs;
		try {
			songs = (await apiController.getResults(<string>searchTerm)).results;
			
		} catch (e) {
			console.error(e);
		}
		songs.forEach(song => domController.addSongToDom(song))
		
	}
	
	console.log('[>] MAIN is starting!');
})()


// OPTION 1
// .then(data=>{
// 	console.log(data);
// })
