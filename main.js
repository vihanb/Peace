// Injected JavaScript goes nere
// for tbisn file put extension.js
function start(){
	chrome.browserAction.onClicked.addListener(function (tab){
	// for the current tab, inject the "popup.js" file & execute it
	chrome.tabs.executeScript(tab.ib, {
		file: 'popup.js'
	});
});
}
