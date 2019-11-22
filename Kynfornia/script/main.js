/*
 * Author: Chirs Johnson
*/

function main() {
	// compile list of boards MAYBE CHANGE BACK TO VAR
	const boardEls = document.getElementsByClassName("board"); // <object> has keys labeled 0-4

	// <object> contains list of boards and what articles each board contains
	const articles = getIncomingArticles();
	
	
	postIncomingArticles(boardEls, articles);
	// afterward so that it can determine if a button is required
	loadButtons(boardEls, articles);
	
}

// gather incoming data that will be processed for the boards
function getIncomingArticles() {
	let articles = incomingData.posts;
	return articles; // <object> has key for each feed it wants to give articles to
}

// process the incoming posts and assign them to their respective board
function postIncomingArticles(boardEls, articles) {
	Object.keys(articles).forEach(key => {
		// key <string> id of feed in HTML, focuses which feed to drop articles into
		// articleArray <array> of articles that need to be compiled still
		let articleArray = articles[key];
		
		// assigned to trash unless html has hardcoded feed dedicated to it
		let board = boardEls[boardEls.length - 1];
		// find board to assign articles to according to key
		Object.keys(boardEls).forEach(boardKey => {
			if (boardEls[boardKey].id == key) board = boardEls[boardKey];
		});
		
		// assign all articles (iteratively) to the board in question
		articleArray.forEach(uncompiledArticle => {
			// uncompiledArticle <object> of an uncompiled article
			
			// compiledArticle <Article> use .article to get a full html article to put in the feed
			let compiledArticle = new Article(uncompiledArticle.user, uncompiledArticle.heading, uncompiledArticle.content); 
			// removes filler text if it exists
			if (board.children[0].classList[5] == "filler-text") board.removeChild(board.children[0]);
			board.appendChild(compiledArticle.article);
		});
	});
}

main();