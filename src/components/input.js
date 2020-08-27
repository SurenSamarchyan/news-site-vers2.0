import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button";

import './components-style/input.css'


function Input(props) {
	return (
		
			<InputGroup>
				<InputGroup.Prepend>
					<Button onClick={props.request} variant="outline-primary" size='lg'>Search News</Button>
				</InputGroup.Prepend>
				<FormControl onChange={props.handleInputChanges} aria-describedby="basic-addon1" size='lg'/>
			</InputGroup>
	)
}
export default Input;
