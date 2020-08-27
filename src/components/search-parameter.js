import React from "react";
import FormCheck from "react-bootstrap/FormCheck";
import Row from "react-bootstrap/Row";
/*
import './search-parameter.css'
*/


export default function SearchParameter() {
	return (
		<Row className='justify-content-md-center'
		     id='search-parameter'>
			
			<FormCheck
				type='radio'
				label='Top Headlines'
				className='custom-checkbox'
				name='filter'
				value='top-headlines'
				defaultChecked='checked'
				id='top-headlines'
			/>
			<FormCheck
				type='radio'
				label='Everything'
				className='custom-checkbox'
				name='filter'
				value='everything'
				id='everything'
			/>
		</Row>
	)
	
}