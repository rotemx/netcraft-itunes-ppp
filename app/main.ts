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
	await domController.init()
	console.log('[>] MAIN is starting!');
})()


// OPTION 1
// .then(data=>{
// 	console.log(data);
// })
