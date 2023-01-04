import React, { useRef } from "react";
import Wave from "../../../icon/wave";
import ImageContainer from "../image-container";
import Video from "../video";

type Props = {};

const About = (props: Props) => {
	const videoRef = useRef<HTMLVideoElement>(
		null
	) as React.MutableRefObject<HTMLVideoElement>;

	return (
		<section id="about" className="py-20 ">
			<div
				className=" flex flex-col lg:flex-row px-3 items-center lg:items-start justify-center gap-x-0 md:gap-x-16 lg:gap-x-28 gap-y-20 
				lg:gap-y-0 w-11/12 sm:w-4/5 mx-auto my-0"
			>
				<div className="flex flex-col gap-y-12">
					<div className="font-bold font-cabinetgrotesk text-3xl bg-gradient-to-tl from-zinc-300 to-gray-500 bg-clip-text text-transparent">
						<p>About</p>
					</div>

					<Video
						videoRef={videoRef}
						src={`./video/dre.mp4`}
						type={`video/mp4`}
						muted={true}
						loop={true}
						autoPlay={true}
						className={
							"w-[23rem] sm:w-[28rem] h-[23rem] sm:h-[28rem] rounded-lg"
						}
					/>
				</div>

				<div
					className="flex flex-col gap-y-6 w-11/12 sm:w-[28rem] lg:w-[24rem] 
                "
				>
					<div className="text-3xl sm:text-5xl font-bold font-cabinetgrotesk text-white">
						<p>Damilare Adigun</p>
					</div>
					<div className="flex flex-col text-base font-medium gap-y-5 bg-gradient-to-tl from-zinc-300 to-gray-500 bg-clip-text text-transparent">
						<div className="flex flex-row items-center gap-x-2">
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
		</section>
	);
};

export default About;
