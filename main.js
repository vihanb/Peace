import RedditRoute from './RedditRoute';

function getRoute() {
	switch (location.host) {
		case "www.reddit.com":
		case "reddit.com": return new RedditRoute();

		default: return null;
	}
}

const route = getRoute().run();
