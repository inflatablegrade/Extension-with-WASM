chrome.action.onClicked.addListener(function(tab) {
	const tabId = tab.id;
	
	chrome.scripting.executeScript({		
		target: {tabId: tabId},
		files: ["content_script.js"]
	});
});
