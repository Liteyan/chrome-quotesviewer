if (location.href.match(/(https|http):\/\/(twitter.com)\/([A-Za-z0-9_]*)\/(status|statues)\/(\d+)/ig)) {
	const quotesURI = location.href.endsWith("/") ? location.href.match() + "quotes" : location.href + "/quotes";
	location.href = quotesURI;
}
