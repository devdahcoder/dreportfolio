import {
	MotionValue,
	motion,
	useMotionValue,
	useScroll,
	useTransform,
} from "framer-motion";
import React, { useRef } from "react";
import CircleText from "../cirlcle-text";
import HeroText from "../hero-text";
import NameRender from "../name-render";
import SectionContainer from "../section-container";

type Props = {
	cursorType: string;
	setCursorType: React.Dispatch<React.SetStateAction<string>>;
};

export function useParallax(value: MotionValue<number>, distance: number) {
	return useTransform(value, [0, 1], [-distance, distance]);
}

const Hero = (props: Props) => {
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
	const [heroText, setHeroText] = React.useState(
		"Product & Interaction Designer with over three years of experience solving problems with a cup of coffee somewhere in Lagos. designing for Saas, Healthcare, E-commerce & Web3.0. Currently, I work in a Product team at ShawnExchange"
	);

	const heroTextArray = heroText.split(" ");
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({ target: ref });
	const y = useParallax(scrollYProgress, 300);

	const { cursorType, setCursorType } = props;

	const nameVariant = {
		hidden: {
			y: 50,
		},
		visible: {
			y: 0,
			transition: {
				ease: "linear",
				duration: 0.3,
			},
		},
	};

	const heroTextVariant = {
		hidden: {
			opacity: 0.5,
		},
		visible: {
			opacity: 1,
		},
	};

	return (
		<section ref={ref} className={`snap--section py-24 h-screen`}>
			<div
				className={`flex flex-col gap-y-5 md:gap-y-10 w-11/12 md:w-4/5 mt-0 mx-auto`}
			>
				<motion.div
					initial="hidden"
					variants={nameVariant}
					whileInView="visible"
					viewport={{ once: true }}
					className="flex flex-col md:flex-row items-start md:items-center gap-y-2 md:gap-y-0 gap-x-8 text-justify text-[16vw] sm:text-[13vw] md:text-[10.7vw] leading-[1] md:leading-[0.7] font-extrabold 
					font-cabinetgrotesk text-white after:inline-block after:w-full"
				>
					<NameRender
						textArray={firstName}
						delay={0.1}
						className={`md:my-5`}
					/>
					<NameRender
						textArray={lastName}
						delay={0.2}
						className={`md:my-5`}
					/>
				</motion.div>

				<div className="flex flex-col md:flex-row justify-between gap-y-12">
					<motion.div
						variants={heroTextVariant}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						className="flex flex-row flex-wrap gap-x-2 items-center text-lg font-medium w-4/5 md:w-2/4 bg-gradient-to-tl from-slate-300 to-gray-400 bg-clip-text text-transparent"
					>
						{heroTextArray?.map((text: string, index: number) => (
							<>
								{text.toLowerCase() !== "shawnexchange" && (
									<HeroText
										key={index}
										index={index}
										text={text}
										containerClassName={"w-max"}
									/>
								)}
								{text.toLowerCase() === "shawnexchange" && (
									<HeroText
										key={index}
										index={index}
										containerClassName={"w-max"}
									>
										<span className="ml-1">
											<a
												href="https://www.shawn.exchange/"
												target="_blank"
												rel="noopener noreferrer"
												className=" text-orange-500 no-underline"
											>
												ShawnExchange
											</a>
										</span>
									</HeroText>
								)}
							</>
						))}
					</motion.div>

					<CircleText
						text={"- Download - Resume"}
						cursorType={cursorType}
						setCursorType={setCursorType}
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
