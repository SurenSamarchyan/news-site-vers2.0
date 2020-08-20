let requestNewsContent = fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=41b88290fdb84562a4448e3ecd1d7498')
	.then(data =>data.json());

export  default requestNewsContent


