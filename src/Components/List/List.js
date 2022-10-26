import React from 'react'

const List = (props) => {
	const pets = props?.pets;
	const cats = pets?.filter((pet) => pet.type === "Cat");
	const catList = cats?.sort((a,b) =>  a.name.localeCompare(b.name));
	return (
		<div role="list">
			{ catList 
				?  catList?.map((cat, i) => {
						return (
							<div key={i} role="listitem">{cat.name}</div>
						)
					})
				: <div>Doesn't have a cat</div>
			}
			
		</div>
	)
}

export default List