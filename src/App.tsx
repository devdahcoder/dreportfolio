import { useState } from "react";
import Header from "../components/header";
import Intro from "../components/intro";
import Footer from "../components/section/footer";
import Contact from "../components/section/contact";
import About from "../components/section/about";

function App() {
	return (
		<div className="font-inter">
			<Header />
			<Intro />
			<About/>
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
