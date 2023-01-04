import React from "react";
import CircleText from "./cirlcle-text";
import SectionContainer from "./section-container";

type Props = {
	cursorType: string;
	setCursorType: React.Dispatch<React.SetStateAction<string>>;
};

const Intro = (props: Props) => {

	const [timeFormat, setTimeFormat] = React.useState<string>("");
	const [timeHour, setTimeHour] = React.useState<number>(0);
	const [timeMinute, setTimeMinute] = React.useState<string>("");
	const { cursorType, setCursorType } = props;

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
		<div className={`py-24`}>
			<div
				className={`flex flex-col md:gap-y-16 w-11/12 md:w-4/5 mt-0 mx-auto`}
			>
				<div
					className="text-justify text-[16vw] sm:text-[13vw] md:text-[10.7vw] leading-[1] md:leading-[0.7] font-extrabold 
					font-cabinetgrotesk text-white after:inline-block after:w-full"
				>
					<p>Damilare Adigun</p>
				</div>

				<div className="flex flex-col md:flex-row justify-between gap-y-12">
					<div className="text-lg font-medium w-4/5 md:w-2/4 bg-gradient-to-tl from-slate-300 to-gray-400 bg-clip-text text-transparent">
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
						<CircleText
							text={"- Download - Resume"}
							cursorType={cursorType}
							setCursorType={setCursorType}
						/>
					</div>

					<div className="fixed bottom-5 right-5 pointer-events-none z-50">
						<div className="flex flex-row items-center text-sm animate-pulse text-white">
							{timeHour}:{timeMinute} {timeFormat} GMT, Lagos
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Intro;
