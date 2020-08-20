import React, {useState} from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl'


function Input() {
	const [inputValue, setInputValue] = useState('');
	const handleInputChanges = (event) => {
		setInputValue(event.target.value)
		
		
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

