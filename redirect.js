var host = "https://action.aclu.org/donate-aclu";
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
		console.log("I'm loaded!");
         return {redirectUrl: host};
    },
    {
        urls: [
            "*://donate.donaldjtrump.com/*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);