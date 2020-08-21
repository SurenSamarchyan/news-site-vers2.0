let requestNewsContent = (inputValue) => {
	const apiKey = '41b88290fdb84562a4448e3ecd1d7498';
	const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`
	/*top-headlines
	everything*/
	
	console.log(inputValue)
	
	
	
	return (fetch(url)
	.then(data =>data.json()))}

export  default requestNewsContent


