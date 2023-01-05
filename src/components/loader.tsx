import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Loader = () => {
	const controls = useAnimation();

	useEffect(() => {
		controls.start("visible");
	}, []);

	return (
		<div className="w-full h-full absolute top-0 left-0 flex flex-row items-center justify-center">
			<div className="bar">
				<div className="circle"></div>
				<p className="loading--text">Loading</p>
			</div>
		</div>
	);
};

export default Loader;
