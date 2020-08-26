import React from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl'


function Input(props) {
	
	
	return (
		/*<div>
			<input onChange={props.handleInputChanges}>
			</input>
			<button onClick={props.request}> Click</button>
		</div>*/
		
		<InputGroup>
			<InputGroup.Prepend>
				<InputGroup.Text>With textarea</InputGroup.Text>
			</InputGroup.Prepend>
			<FormControl as="textarea" aria-label="With textarea" />
		</InputGroup>
	)
}

export default Input;
