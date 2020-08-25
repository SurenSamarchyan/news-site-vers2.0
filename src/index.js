import ReactDOM from 'react-dom';
import React, {useState, useEffect} from 'react';
// Data

// Component
import Card from "./components/card";
import Input from "./components/input";
import requestNewsContent from "./services/requestNewsContent";
//Style
import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import './index.css'


function HomePage() {
	const [inputValue, setInputValue] = useState('row');
	const [storageNews, setStorageNews] = useState(false);
	
	const request = () => {
		requestNewsContent(inputValue).then(data => {
			setStorageNews(data)
		});
	};
	useEffect(() => {
			request()
		}, []
	)
	const handleInputChanges = (event) => {
		setInputValue(event.target.value)
	}
	
	  function cl() {
		console.log('event')
	}
 
	return (
		<div>
			<input onChange={handleInputChanges}>
			</input>
			<button onClick={request}> Click</button>
			<Input/>
			<Row className='justify-content-md-center search-parameter'>
				<ButtonGroup size="lg" className="mb-2" >
					<Button>Top headline</Button>
					<Button> Everything </Button>
				</ButtonGroup>
			</Row>
			<div id='news-container' className='container-fluid'>
				<Row>
					{storageNews ? (storageNews).articles.map((news, index) => {
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
					}) : "loading please wait "}
				</Row>
			</div>
		</div>
	)
}

ReactDOM.render(
	<HomePage/>,
	document.getElementById('root')
);

