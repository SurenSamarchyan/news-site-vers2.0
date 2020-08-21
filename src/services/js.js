import ReactDOM from 'react-dom';
import React from "react";
import { useState } from 'react';
// Data
import newsListObject from "./newsObject";
// Component
import Card from "./components/card";

import Input from "./components/input";


//Style
import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';
import './index.css'

function HomePage() {
	/*	const [inputValue, setInputValue ] = useState('');
		const handleInputChanges = (event)=>{
			setInputValue(event.target.value)
			//getNews().then(data=>{setNews(data)});
		}*/
	
	
	/*<input onChange={handleInputChanges}>
	</input>
	<Input />
	<div>{inputValue}</div>*/
	return (
		<div>
			<Input />
			<div id='news-container' className='container-fluid'>
				<Row>
					{newsListObject.articles.map((news, index) => {
						return (
							<Card
								key={index}
								cardIndex={index}
								url={news.url}
								title={news.title}
								urlToImage={news.urlToImage}
								description={news.description}
							/>
						)
					})}
				</Row>
			</div>
		</div>
	)
}

ReactDOM.render(
	<HomePage/>,
	document.getElementById('root')
);


import React, {useState} from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl'


function Input() {
	const [inputValue, setInputValue] = useState('');
	const handleInputChanges = (event) => {
		setInputValue(event.target.value)
		const [storageNews, setStorageNews  ]= useState({})
		
		//getNews().then(data=>{setNews(data)})
	}
	return (
		<div>
			<input onChange={handleInputChanges}/>
			<div>{inputValue}</div>
		</div>
	)
}

export default Input;












