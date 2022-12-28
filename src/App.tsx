import React, { useState } from "react";
import Header from "./components/header";
import Intro from "./components/intro";
import About from "./components/section/about";
import Contact from "./components/section/contact";
import Footer from "./components/section/footer";
import Experience from "./components/section/experience";

function App() {
	return (
		<div className="font-inter">
			<Header />
			<Intro />
			<About />
			<Experience />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
