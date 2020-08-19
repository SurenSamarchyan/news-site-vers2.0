import React from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl'



function Input ({setInputValue}){
	return(
		<input onChange={(string) => setInputValue(string.target.value)}>
		</input>

	)
}

export default Input;
