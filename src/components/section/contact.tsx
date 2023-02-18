import React, { useState } from 'react'
import ParallaxCharacter from "../parallax-character";

type Props = {}

const Contact = (props: Props) => {

	const [contactText, setContactText] = React.useState<Array<Array<string>>>([
		["I", "n", "t", "e", "r", "e", "s", "t", "e", "d"],
		["i", "n"],
		["w", "o", "r", "k", "i", "n", "g"],
		["t", "o", "g", "e", "t", "h", "e", "r", "?"],
		["L", "e", "t"],
		["m", "e"],
		["b", "u", "y"],
		["y", "o", "u"],
		["c", "o", "f", "f", "e", "e"],
	]);

    return (
		<div className="py-20 bg-[#151515]">
			<div className="flex flex-col items-start justify-start gap-y-5 w-4/5 sm:my-0 sm:mx-auto px-3 transition-all duration-500 ease-in-out">
				<div>
					<div className="flex flex-row items-center gap-x-3 py-1 px-5 rounded-full border bg-gradient-to-b from-slate-600 to-slate-300 bg-clip-text text-transparent">
						<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>

						<p>Open to opportunities</p>
					</div>
				</div>

				<div className="text-5xl font-bold font-cabinetgrotesk bg-gradient-to-b from-slate-600 to-slate-300 bg-clip-text text-transparent">
					{/* <span>Interested in working together?</span> <br />{" "} */}
					<div
						className={`flex flex-row items-center flex-wrap  gap-x-3`}
					>
						{contactText
							?.slice(0, 4)
							?.map((arrayText: Array<string>, index: number) => (
								<ParallaxCharacter
									key={index}
									subContainerClassName={`text-5xl`}
									className={`!my-1 text-5xl text-white text-transparent`}
									textArray={arrayText}
								/>
							))}
					</div>
					<div className={`flex flex-row gap-x-3`}>
						{contactText
							?.slice(4)
							?.map((arrayText: Array<string>, index: number) => (
								<ParallaxCharacter
									key={index}
									subContainerClassName={`text-5xl`}
									className={`!my-1 text-5xl text-white text-transparent`}
									textArray={arrayText}
								/>
							))}
					</div>
				</div>

				<div>
					<a
						href="http://"
						target="_blank"
						rel="noopener noreferrer"
						className="flex flex-row items-center justify-center w-full py-1 text-2xl text-orange-600"
					>
						Book a call
					</a>
				</div>
			</div>
		</div>
	);
}

export default Contact