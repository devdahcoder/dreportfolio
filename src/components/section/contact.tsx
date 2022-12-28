import React from 'react'

type Props = {}

const Contact = (props: Props) => {
    return (
		<div>
			<div className="flex flex-col items-start justify-start gap-y-2 w-4/5 my-0 mx-auto">
				<div>
					<div className="flex flex-row items-center gap-x-3 py-0.5 px-5 rounded-full border">
						<div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>

						<p>Open to opportunities</p>
					</div>
                </div>
                
				<div className="text-5xl font-bold font-cabinetgrotesk">
					<span>Interested in working together?</span> <br /> <span>Let me buy you Coffee</span>
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