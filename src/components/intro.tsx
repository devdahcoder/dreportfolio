import React, { useRef } from "react";
import CircleText from "./cirlcle-text";
import SectionContainer from "./section-container";
import {
	motion,
	useMotionValue,
	useTransform,
	useScroll,
	MotionValue,
} from "framer-motion";
import NameRender from "./name-render";

type Props = {
	cursorType: string;
	setCursorType: React.Dispatch<React.SetStateAction<string>>;
};

export function useParallax(value: MotionValue<number>, distance: number) {
	return useTransform(value, [0, 1], [-distance, distance]);
}

const Intro = (props: Props) => {
	const [timeFormat, setTimeFormat] = React.useState<string>("");
	const [timeHour, setTimeHour] = React.useState<number>(0);
	const [timeMinute, setTimeMinute] = React.useState<string>("");
	const [firstName, setFirstName] = React.useState<Array<string>>([
		"D",
		"a",
		"m",
		"i",
		"l",
		"a",
		"r",
		"e",
	]);
	const [lastName, setLastName] = React.useState<Array<string>>([
		"A",
		"d",
		"i",
		"g",
		"u",
		"n",
	]);
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({ target: ref });
	const y = useParallax(scrollYProgress, 300);

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

	const nameVariant = {
		hidden: {
			y: 50,
		},
		visible: {
			y: 0,
			transition: {
				// delay: 0.3,
				ease: "linear",
				duration: 0.3,
			},
		},
	};

	return (
		<section ref={ref} className={`snap--section py-24 h-screen`}>
			<motion.div
				initial="hidden"
				variants={nameVariant}
				whileInView="visible"
				viewport={{ once: true }}
				className={`flex flex-col md:gap-y-16 w-11/12 md:w-4/5 mt-0 mx-auto`}
			>
				<motion.div
					className="flex flex-row items-center gap-x-8 text-justify text-[16vw] sm:text-[13vw] md:text-[10.7vw] leading-[1] md:leading-[0.7] font-extrabold 
					font-cabinetgrotesk text-white after:inline-block after:w-full"
				>
					<NameRender textArray={firstName} delay={0.1} />
					<NameRender textArray={lastName} delay={0.3} wait={1000} />
				</motion.div>

				<div className="flex flex-col md:flex-row justify-between gap-y-12">
					<motion.div
						initial={{ y: "200%", opacity: 0.4 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{
							duration: 2,
							ease: "easeInOut",
							velocity: 1,
							delay: 1,
						}}
						className="text-lg font-medium w-4/5 md:w-2/4 bg-gradient-to-tl from-slate-300 to-gray-400 bg-clip-text text-transparent"
					>
						<p>
							Product & Interaction Designer with over three years
							of experience solving problems with a cup of coffee
							somewhere in Lagos. designing for Saas, Healthcare,
							E-commerce & Web3.0. Currently, I work in a Product
							team at{" "}
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
					</motion.div>

					<CircleText
						text={"- Download - Resume"}
						cursorType={cursorType}
						setCursorType={setCursorType}
					/>

					<div className="fixed bottom-5 right-5 pointer-events-none z-50">
						<div className="flex flex-row items-center text-sm animate-pulse text-white">
							{timeHour}:{timeMinute} {timeFormat} GMT, Lagos
						</div>
					</div>
				</div>
			</motion.div>
		</section>
	);
};

export default Intro;
