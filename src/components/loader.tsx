import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Loader = () => {
	const controls = useAnimation();

	useEffect(() => {
		controls.start("visible");
	}, []);

	return (
		<div className="absolute top-0 left-0 overflow-y-hidden overflow-x-hidden w-full h-full border">
			<div className="bg-blue-600 w-full overflow-hidden">
				<div className="bar">
					<div className="circle"></div>
					<p className="loading--text text-[hsl(0, 0%, 7%)">
						Damilare
					</p>
				</div>
			</div>
		</div>
	);
};

export default Loader;
{/* <div className="absolute top-0 left-0 overflow-y-hidden overflow-x-hidden w-full h-full flex flex-row items-center justify-center">
	<div className="bg-[hsl(0, 0%, 7%)] w-full overflow-hidden h-10">
		<div className="relative h-1 w-80 my-0 mx-auto mt-10">
			<div className="circle absolute -top-8 h-16 w-16 left-0 bg-white rounded-3xl"></div>
			<p className="absolute -top-9 -right-20 uppercase text-blue-400 font-bold">
				Damilare
			</p>
		</div>
	</div>
</div>; */}