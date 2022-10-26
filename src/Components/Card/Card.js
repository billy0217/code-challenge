import React from 'react'
import Heading from '../Heading/Heading';
import List from '../List/List';
import './Card.scss';

const Card = (props) => {
	const data = props.list;

	return (
		<div className='c-card'>
			<Heading content={data.gender} />
			<List pets={data.pets} />
		</div>
	)
}

export default Card