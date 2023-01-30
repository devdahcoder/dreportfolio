import React, { useState } from 'react'
import NameRender from '../name-render';

type Props = {}

const Contact = (props: Props) => {
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
						<NameRender
							subContainerClassName={`text-5xl`}
							className={`!my-1 text-5xl bg-gradient-to-b from-slate-600 to-slate-300 bg-clip-text text-transparent`}
							textArray={[
								"I",
								"n",
								"t",
								"e",
								"r",
								"e",
								"s",
								"t",
								"e",
								"d",
							]}
						/>
						<NameRender
							subContainerClassName={`text-5xl`}
							className={`!my-1 text-5xl bg-gradient-to-b from-slate-600 to-slate-300 bg-clip-text text-transparent`}
							textArray={["i", "n"]}
						/>
						<NameRender
							subContainerClassName={`text-5xl`}
							className={`!my-1 text-5xl bg-gradient-to-b from-slate-600 to-slate-300 bg-clip-text text-transparent`}
							textArray={["w", "o", "r", "k", "i", "n", "g"]}
						/>
						<NameRender
							subContainerClassName={`text-5xl`}
							className={`!my-1 text-5xl bg-gradient-to-b from-slate-600 to-slate-300 bg-clip-text text-transparent`}
							textArray={[
								"t",
								"o",
								"g",
								"e",
								"t",
								"h",
								"e",
								"r",
								"?",
							]}
						/>
					</div>
					<div className={`flex flex-row gap-x-3`}>
						<NameRender
							subContainerClassName={`text-5xl`}
							className={`!my-1 text-5xl bg-gradient-to-b from-slate-600 to-slate-300 bg-clip-text text-transparent`}
							textArray={["L", "e", "t"]}
						/>
						<NameRender
							subContainerClassName={`text-5xl`}
							className={`!my-1 text-5xl bg-gradient-to-b from-slate-600 to-slate-300 bg-clip-text text-transparent`}
							textArray={["m", "e"]}
						/>
						<NameRender
							subContainerClassName={`text-5xl`}
							className={`!my-1 text-5xl bg-gradient-to-b from-slate-600 to-slate-300 bg-clip-text text-transparent`}
							textArray={["b", "u", "y"]}
						/>
						<NameRender
							subContainerClassName={`text-5xl`}
							className={`!my-1 text-5xl bg-gradient-to-b from-slate-600 to-slate-300 bg-clip-text text-transparent`}
							textArray={["c", "o", "f", "f", "e", "e"]}
						/>
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