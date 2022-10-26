import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "../Card";

test("Card component should be rendered", () => {
	const data = {
		name: "Bob",
		gender: "Male",
		age: 23,
		pets: 
			[
				{
					name : "Tom", 
					type: "Cat"
				}, 
				{
					name: "Max", 
					type: "Cat"
				},
				{
					name : "Sam", 
					type: "Dog"
				},
				{
					name : "Jim", 
					type: "Cat"
				}
			]
	};
	render(<Card list={data}/>);
	const cardComponent = screen.getByRole("heading", {level: 3});
	expect(cardComponent.textContent).toBe("Male");
});

test("Card component should be have 2 cat names", async () => {
	const data = {
		name: "Bob",
		gender: "Male",
		age: 23,
		pets: 
			[
				{
					name : "Tom", 
					type: "Cat"
				}, 
				{
					name: "Max", 
					type: "Cat"
				},
				{
					name : "Sam", 
					type: "Dog"
				}
			]
	};
	render(<Card list={data}/>);
	const listItems = await screen.findAllByRole("listitem");
	expect(listItems).toHaveLength(2);
});

