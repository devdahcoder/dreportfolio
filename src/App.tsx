import { useState } from "react";
import Header from "../components/header";
import Intro from "../components/intro";
import Footer from "../components/section/footer";

function App() {
	return (
		<div className="font-inter">
			<Header />
			<Intro />
			<Footer />
		</div>
	);
}

export default App;
