import ReactDOM from 'react-dom';
import React, {useState, useEffect} from 'react';
// Data
import newsListObject from "./newsObject";
// Component
import Card from "./components/card";
import Input from "./components/input";
import requestNewsContent from "./services/requestNewsContent";
//Style
import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';
import './index.css'


function HomePage() {
	
	const [inputValue, setInputValue] = useState('');
	const [storageNews, setStorageNews] = useState('');
	const request = () => {
		requestNewsContent(inputValue).then(data => {
			setStorageNews(data)
		});
	};
	
	useEffect(()=> {
		},[inputValue]
	)
	const handleInputChanges = (event) => {
		setInputValue(event.target.value)
	}
	
	return (
		<div>
			<input onChange={handleInputChanges}>
			</input>
			<button onClick={request}> Click</button>
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

