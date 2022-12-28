import React from "react";
import Wave from "../../../icon/wave";
import ImageContainer from "../image-container";

type Props = {};

const About = (props: Props) => {
	return (
		<div>
			<div className="flex flex-row justify-between w-4/5 mx-auto my-0">
				<div
					className="flex flex-col gap-y-12
                "
				>
					<div className="font-bold font-cabinetgrotesk text-3xl">
						<p>About</p>
					</div>

					<ImageContainer
						imageLink="./image/Pexels.png"
						className={"w-[25rem] h-[340px] rounded-lg"}
					/>
				</div>
				<div
					className="flex flex-col gap-y-6 w-[24rem] 
                "
				>
					<div className="font-bold font-cabinetgrotesk text-5xl">
						<p>Damilare Adigun</p>
					</div>
					<div className="flex flex-col text-base font-medium gap-y-5">
						<div className="flex flex-row items-center ">
							<p>Hello</p>
							<span>
								<Wave />
							</span>
						</div>

						<div>
							<p>
								Hello I am a Product Designer with over two
								years of experience designing for Saas,
								Healthcare, E-commerce, Ed-tech, Logistics and
								I'm currently testing Extended Realities.
							</p>
						</div>

						<div>
							<p>
								I have contributed to the launching of several
								Early-Stage Products as a Freelancer from MVP to
								Lead-Generating Platforms. I collaborate and
								work with Brilliant Minds to implement User
								Research, Competitor Analysis, Wireframes,
								Sketches, Design Systems, Dashboards, Mobile and
								Web Applications.
							</p>
						</div>
						<div>
							<p>.........and I love Coffee ☕</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
