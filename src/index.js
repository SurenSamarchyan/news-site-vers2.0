import ReactDOM from 'react-dom';
import React from "react";
import Card from "./components/card";
import newsListObject from "./newsObject";
import Input from "./components/input";



function Bord (){
	return(
		<div>
			<Input />
			{newsListObject.articles.map((news, index) => {
			return (
				<Card
					key={ index }
					url={ news.url }
					title= { news.title }
					urlToImage= { news.urlToImage }
					description= {news.description}
				/>
			)
			})}
		</div>
	)
}

ReactDOM.render(
	<Bord />,
	document.getElementById('root')
);

