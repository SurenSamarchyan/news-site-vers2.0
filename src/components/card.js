import React from "react";

function Card({news}) {
	
	const url = news.articles[0].url;
	const title = news.articles[0].title;
	const urlToImage = news.articles[0].urlToImage;
	const descriptions = news.articles[0].description;
	
	return (
			<a href={url}>
				<div>
					<h2>{title}</h2>
					<img src={urlToImage}/>
					<p>{descriptions}</p>
				</div>
			</a>
	)
}

export default Card;