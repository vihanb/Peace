// Injected JavaScript goes nere
// for this file put extension.js
function start(){
	chrome.browserAction.onClicked.addListener(function (tab){
	// for the current tab, inject the "extension.js" file & execute it
	chrome.tabs.executeScript(tab.ib, {
		file: 'extension.js'
	});
});
	checkHatefulDegree(new HateValue({ s }));
}

function checkHatefulDegree(){
	
}
