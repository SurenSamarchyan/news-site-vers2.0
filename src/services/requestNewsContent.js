let requestNewsContent = (inputValue) => {
	const apiKey = '41b88290fdb84562a4448e3ecd1d7498';
	
	let url
	inputValue === '' ?
		url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
	:
		url = `https://newsapi.org/v2/top-headlines?q=${inputValue}&apiKey=${apiKey}`
	
	
	return (fetch(url)
	.then(data =>data.json()))
};

export  default requestNewsContent


