import React, { useState } from "react";
import Header from "./components/header";
import Intro from "./components/intro";
import About from "./components/section/about";
import Contact from "./components/section/contact";
import Footer from "./components/section/footer";
import Experience from "./components/section/experience";
import Work from "./components/section/work";
import { useCursor } from "../hook/index";
import Cursor from "./components/cursor";

function App() {

	const { cursorType, mousePosition, setCursorType } = useCursor();

	return (
		<div className="font-inter">
			<Cursor
				cursorType={cursorType}
				setCursorType={setCursorType}
				mousePosition={mousePosition}
			/>
			<Header cursorType={cursorType} setCursorType={setCursorType} />
			<Intro cursorType={cursorType} setCursorType={setCursorType} />
			<About />
			<Work />
			<Experience />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
