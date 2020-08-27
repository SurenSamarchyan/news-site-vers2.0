import ReactDOM from 'react-dom';
import React, {useState, useEffect} from 'react';
// Data

// Component
import Card from "./components/card";
import Input from "./components/input";
import requestNewsContent from "./services/requestNewsContent";
import PreloadHomePage from './components/preload-home-page';
import SearchParameter from "./components/search-parameter";
//Style
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import Row from 'react-bootstrap/Row';


function HomePage() {
	console.log('Home Page');
	const [inputValue, setInputValue] = useState('');
	const [storageNews, setStorageNews] = useState(false);
	const [checkedValue, setCheckedValue] = useState('top-headlines');
	
	const request = () => {
		requestNewsContent(inputValue).then(data => {
			setStorageNews(data)
		});
	};
	
	useEffect(() => {
		setCheckedValue(document.querySelector(".search-parameter > .custom-checkbox" ).value);
		console.log(checkedValue);
		request();
		}, [],
	)
	
	const handleInputChanges = (event) => {
		setInputValue(event.target.value)
	}
	
	return (
		<div>
			
			
			
			<Input handleInputChanges={handleInputChanges} request={request} />
			
			
			{/*<Row className='justify-content-md-center search-parameter'>
				<ButtonGroup size="lg" className="mb-2">
					<Button>Top headline</Button>
					<Button> Everything </Button>
				</ButtonGroup>
			</Row>*/}
			
			<SearchParameter />
			<div id='news-container' className='container-fluid'>
				{
					<Row>
						{storageNews ? storageNews.articles.map((news, index) => {
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
						}):
							<PreloadHomePage />
						}
					</Row>
				}
			</div>
		</div>
	)
}

ReactDOM.render(
	<HomePage/>,
	document.getElementById('root')
);

