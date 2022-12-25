import React from 'react'
import CircleText from './cirlcle-text';

type Props = {}

const Intro = (props: Props) => {
    return (
		<div className=" w-4/5 mt-0 mx-auto">
			<div className="flex flex-col">
				<div className="text-[9rem] font-extrabold font-cabinetgrotesk">
					<p>Damilare Adigun</p>
				</div>
				<div className="flex flex-row justify-between ">
					<div className="text-lg font-medium w-2/4">
						<p>
							Product Designer with over two years of experience
							designing for Saas, Healthcare, E-commerce & Web3.0.
							Currently, I work in a Product team at{" "}
							<span>
								<a
									href="https://www.shawn.exchange/"
									target="_blank"
									rel="noopener noreferrer"
									className=" text-orange-500 no-underline"
								>
									ShawnExchange
								</a>
							</span>
						</p>
					</div>
					<div>
						<CircleText text={"- Download - Resume"} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Intro