import ReactDOM from 'react-dom';
import React from "react";
import Card from "./components/card";
import newsListObject from "./newsObject";




function Bord (){
	console.log(newsListObject)
	return(
		<div>
			<Card news={newsListObject}  />
		</div>
	)
	
}





ReactDOM.render(
	<Bord />,
	document.getElementById('root')
);