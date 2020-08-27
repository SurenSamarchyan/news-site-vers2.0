import React from "react";
import Col from 'react-bootstrap/Col'
import './components-style/card.css'


function Card(props) {
	return (
		<Col xs={12} sm={6} lg={3}>
			<div  className='news-card-block'>
				<a href={props.url}>
					<div className='card'>
						<h2>{props.title}</h2>
						<div className='news-image' style={{backgroundImage: `url(${props.urlToImage})`}}>
						</div>
						<p>{props.description}</p>
					</div>
				</a>
			</div>
		</Col>
	)
}
export default Card;