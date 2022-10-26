import React from 'react'
import './Heading.scss';

const Heading = (props) => {
	const heading = props.content;
	return (
		<h3 className='c-heading'>{heading}</h3>
	)
}

export default Heading