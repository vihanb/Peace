import RedditRoute from './RedditRoute';
import TwitterRoute from './TwitterRoute';

function getRoute() {
	switch (location.host) {
		case "www.reddit.com":
		case "reddit.com": return new RedditRoute();

		case "www.twitter.com":
		case "twitter.com": return new TwitterRoute();

		default: return null;
	}
}

const route = getRoute().run();
