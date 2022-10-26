import React from "react";
import { render, screen } from "@testing-library/react";
import Heading from "../Heading";

test("Render Heading Component", ()=> {
	const data = {
		name: "Bob",
		gender: "Male",
		age: 23
	};

	render(<Heading content={data.gender} />);
	const headingText = screen.getByRole("heading", {level: 3});
	expect(headingText.textContent).toBe("Male");
})