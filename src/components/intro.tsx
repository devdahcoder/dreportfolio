import React from "react";
import CircleText from "./cirlcle-text";
import SectionContainer from "./section-container";

type Props = {};

const Intro = (props: Props) => {

	const [timeFormat, setTimeFormat] = React.useState<string>("");
	const [timeHour, setTimeHour] = React.useState<number>(0);
	const [timeMinute, setTimeMinute] = React.useState<string>("");

	React.useEffect(() => {
		const interval = setInterval(() => {
			const getCurrentDay = new Date();

			const getCurrentHour = getCurrentDay.getHours();

			const getCurrentMinute = getCurrentDay.getMinutes();

			const getAmPm = getCurrentHour >= 12 ? "PM" : "AM";

			const getHour = getCurrentHour % 12 || 12;

			let getTwentyFourHour =
				getCurrentHour <= 9
					? `0${getCurrentHour}`
					: `${getCurrentHour}`;

			let getMinute =
				getCurrentMinute <= 9
					? `0${getCurrentMinute}`
					: `${getCurrentMinute}`;

			setTimeFormat(getAmPm);
			setTimeHour(getHour);
			setTimeMinute(getMinute);
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<SectionContainer
			containerClassName="py-24"
			className="flex flex-col"
		>
			<div className="text-[9rem] font-extrabold font-cabinetgrotesk text-white">
				<p>Damilare Adigun</p>
			</div>
			<div className="flex flex-row justify-between ">
				<div className="text-lg font-medium w-2/4 bg-gradient-to-tl from-slate-300 to-gray-400 bg-clip-text text-transparent">
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

				<div className="fixed bottom-10 right-10">
					<div className="flex flex-row items-center text-sm animate-pulse bg-gradient-to-tl from-zinc-300 to-gray-500 bg-clip-text text-transparent">
						{timeHour}:{timeMinute} {timeFormat} GMT, Lagos
					</div>
				</div>
			</div>
		</SectionContainer>
	);
};

export default Intro;
