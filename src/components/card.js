import React from "react";

function Card(props) {
	return (
			<a href={props.url}>
				<div>
					<h2>{props.title}</h2>
					<img src={props.urlToImage } alt=''/>
					<p>{props.description}</p>
				</div>
			</a>
	)
}

export default Card;