import React from "react";
import { render, screen } from "@testing-library/react";
import List from "../List";

test("Reander List Component", ()=> {
	render(<List />);
	const listComponent = screen.getByRole("list");
	expect(listComponent).toBeInTheDocument();
})

test("List Item should be filter by Cat", async ()=> {
	const data = [
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
			}, 
		];
	
	render(<List pets={data} />);
	const listItems = await screen.findAllByRole("listitem");
	expect(listItems).toHaveLength(3);
});

test("First List Item should be Jim", async ()=> {
	const data = [
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
			}, 
		];
	
	render(<List pets={data} />);
	const listitem = await screen.findAllByRole("listitem");
	expect(listitem[0].textContent).toBe("Jim");
});