import React, { useState } from "react";
import Header from "./components/header";
import Intro from "./components/intro";
import About from "./components/section/about";
import Contact from "./components/section/contact";
import Footer from "./components/section/footer";
import Experience from "./components/section/experience";
import Work from "./components/section/work";
import { useCursor } from "../hook/index";

function App() {

	const { cursorType, mousePosition, setCursorType } = useCursor();

	const { x, y } = mousePosition;

	console.log("cursorType ==>", cursorType);

	return (
		<div className="font-inter">
			<div
				className={`circle--cursor ${cursorType} hidden sm:block`}
				style={{ left: `${x}px`, top: `${y}px` }}
			></div>
			<div
				className={`dot animate-ping ${cursorType} hidden sm:block`}
				style={{ left: `${x}px`, top: `${y}px` }}
			></div>
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
