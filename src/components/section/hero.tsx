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
	const [name, setName] = React.useState<string>("Damilare Adigun");

	const nameArray = name.split(" ");
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

	// <motion.span
	// 						initial="hidden"
	// 						variants={textContext}
	// 						whileInView="visible"
	// 						viewport={{ once: true }}
	// 						className="text-white"
	// 					>
	// 						Product & Interaction Designer with over three years
	// 						of
	// 					</motion.span>
	// 					<motion.span
	// 						initial="hidden"
	// 						variants={textContext}
	// 						whileInView="visible"
	// 						viewport={{ once: true }}
	// 						className="text-white"
	// 					>
	// 						experience solving problems with a cup of coffee
	// 						somewhere
	// 					</motion.span>
	// 					<motion.span
	// 						initial="hidden"
	// 						variants={textContext}
	// 						whileInView="visible"
	// 						viewport={{ once: true }}
	// 						className="text-white"
	// 					>
	// in Lagos. designing for Saas, Healthcare, E-commerce
	// &
	// 					</motion.span>
	// 					<motion.span
	// 						initial="hidden"
	// 						variants={textContext}
	// 						whileInView="visible"
	// 						viewport={{ once: true }}
	// 						className="text-white"
	// 					>
	// 						Web3.0. Currently, I work in a Product team at
	// 					</motion.span>

	// 					<span className="ml-1">
	// 						<a
	// 							href="https://www.shawn.exchange/"
	// 							target="_blank"
	// 							rel="noopener noreferrer"
	// 							className=" text-orange-500 no-underline"
	// 						>
	// 							ShawnExchange
	// 						</a>
	// 					</span>

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
			<motion.div
				initial="hidden"
				variants={nameVariant}
				whileInView="visible"
				viewport={{ once: true }}
				className={`flex flex-col md:gap-y-10 w-11/12 md:w-4/5 mt-0 mx-auto`}
			>
				<motion.div
					className="flex flex-row items-center gap-x-8 text-justify text-[16vw] sm:text-[13vw] md:text-[10.7vw] leading-[1] md:leading-[0.7] font-extrabold 
					font-cabinetgrotesk text-white after:inline-block after:w-full"
				>
					<NameRender textArray={firstName} delay={0.1} />
					<NameRender textArray={lastName} delay={0.2} wait={1000} />
				</motion.div>

				<div className="flex flex-col md:flex-row justify-between gap-y-12">
					<motion.div
						variants={heroTextVariant}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						className="text-lg font-medium w-4/5 md:w-2/4 bg-gradient-to-tl from-slate-300 to-gray-400 bg-clip-text text-transparent"
					>
						{[
							`Product & Interaction Designer with over three years of`,
							`experience solving problems with a cup of coffee
							somewhere`,
							`in Lagos. designing for Saas, Healthcare, E-commerce
							&`,
							`Web3.0. Currently, I work in a Product team at`,
						].map((text, index) => (
							<HeroText key={index} index={index} text={text} />
						))}
					</motion.div>

					<CircleText
						text={"- Download - Resume"}
						cursorType={cursorType}
						setCursorType={setCursorType}
					/>
				</div>
			</motion.div>
		</section>
	);
};

export default Hero;
