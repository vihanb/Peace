// Injected JavaScript goes nere
// for this file put extension.js

function route() {
	switch (location.host) {
		case "www.reddit.com":
		case "reddit.com": return new RedditRoute();

		default: return null;
	}
}

const route = route.run();
