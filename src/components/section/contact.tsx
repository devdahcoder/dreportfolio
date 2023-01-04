import React from 'react'

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
					<span>Interested in working together?</span> <br />{" "}
					<span>Let me buy you Coffee</span>
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