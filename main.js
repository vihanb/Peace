import CommentScraper from './CommentScraper/CommentScraper'

const route = CommentScraper.shared.getRoute();
if (route) {
    route.start();
}
