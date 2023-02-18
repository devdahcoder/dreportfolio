import React, { useRef } from "react";
import {
	motion,
	useAnimationFrame,
	useMotionValue,
	useScroll,
	useSpring,
	useTransform,
	useVelocity,
	wrap,
} from "framer-motion";

type Props = {};

const TextScroll = (props: Props) => {
	const [words, setWords] = React.useState<Array<string>>([
		"Strategy",
		"No-code Dev",
		"Motion & Interaction",
		"Visual Design",
		"UI/UX Design",
	]);

	const baseX = useMotionValue(0);
	const { scrollY } = useScroll();
	const scrollVelocity = useVelocity(scrollY);
	const smoothVelocity = useSpring(scrollVelocity, {
		damping: 50,
		stiffness: 400,
	});
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false,
    });

	/**
	 * This is a magic wrapping for the length of the text - you
	 * have to replace for wrapping that works for you or dynamically
	 * calculate
	 */
	const x = useTransform(baseX, (v) => `${wrap(100, -100, v)}%`);

	const directionFactor = useRef<number>(1);

	useAnimationFrame((t, delta) => {
		let moveBy = directionFactor.current * -5 * (delta / 1000);

		/**
		 * This is what changes the direction of the scroll once we
		 * switch scrolling directions.
		 */
		if (velocityFactor.get() < 0) {
			directionFactor.current = -1;
		} else if (velocityFactor.get() > 0) {
			directionFactor.current = 1;
		}

		moveBy += directionFactor.current * moveBy * velocityFactor.get();

		baseX.set(baseX.get() + moveBy);
	});
	return (
		<div
			className={`flex flex-row items-center overflow-hidden py-10`}
		>
			<motion.div
				className={`flex flex-row items-center gap-x-12`}
				style={{ x }}
			>
				{words?.map((word: string, index: number) => {
					return (
						<div
							key={index}
							className={`w-max flex flex-row items-center gap-x-5 text-4xl text-white`}
						>
							{word}{" "}
							<span>
								<svg
									width="23"
									height="23"
									viewBox="0 0 23 23"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g clipPath="url(#clip0_1327_6963)">
										<path
											d="M11.5 23C17.8513 23 23 17.8513 23 11.5C23 5.14873 17.8513 0 11.5 0C5.14873 0 0 5.14873 0 11.5C0 17.8513 5.14873 23 11.5 23Z"
											fill="#D9D9D9"
										/>
										<path
											d="M19.3207 10.5074L19.6563 10.4463L19.5169 10.1349L18.4899 7.84136L18.3612 7.55377L18.0983 7.72758C15.5189 9.43334 13.5403 10.6086 12.1562 11.2621C12.1616 11.155 12.1692 11.0529 12.1789 10.9555L12.1792 10.9531C12.2012 10.7106 12.2343 10.4449 12.2787 10.1556C12.3456 9.84235 12.3921 9.57774 12.4166 9.36412C12.4616 9.1622 12.5282 8.87378 12.6165 8.49831C12.7296 8.11341 12.8101 7.82606 12.8569 7.63896L12.857 7.63898L12.8585 7.63211C12.903 7.43208 12.9931 7.0713 13.1301 6.54616C13.267 6.02148 13.3686 5.649 13.4356 5.42583L13.5389 5.08154H13.1794H10.4066H10.0603L10.1478 5.41656C10.8521 8.11294 11.2575 10.0515 11.3743 11.248C9.83171 10.5087 7.87128 9.33755 5.48984 7.72903L5.22939 7.55312L5.09742 7.83835L4.03621 10.1319L3.89111 10.4455L4.23109 10.5074C4.73566 10.5991 5.47933 10.7249 6.46108 10.8848L6.46203 10.8849C7.4672 11.0448 8.14088 11.1687 8.49314 11.2568L8.50226 11.2591L8.51152 11.2607C8.88871 11.3273 9.37102 11.4392 9.96048 11.5979L9.96043 11.5981L9.96987 11.6003C10.3962 11.6987 10.7972 11.8148 11.1729 11.9484C10.1138 12.8818 8.26266 14.2118 5.605 15.9424L5.2828 16.1522L5.59158 16.3812L7.714 17.9559L7.93987 18.1235L8.09588 17.8895C8.19016 17.7481 8.38665 17.4359 8.6827 16.9577H8.68275L8.68555 16.9529C8.98243 16.4505 9.16446 16.1434 9.23236 16.0302C9.29934 15.9186 9.44634 15.6811 9.67484 15.3155H9.67492L9.67857 15.3093C9.90334 14.9272 10.05 14.679 10.1192 14.5636L10.5251 13.9547C10.7282 13.6615 10.8816 13.4538 10.9874 13.3266C11.1258 13.1652 11.2746 12.982 11.4338 12.7775C11.5477 12.6495 11.6615 12.5262 11.7751 12.4075C11.8599 12.4978 11.9408 12.5878 12.0179 12.6776L12.0245 12.6854L12.0318 12.6927C12.178 12.8389 12.3154 13.0076 12.4434 13.1997L12.4488 13.2078L12.4548 13.2155C12.6157 13.4223 12.7546 13.596 12.8713 13.736C12.9749 13.8603 13.1048 14.0435 13.2619 14.2903L13.2663 14.2973L13.2712 14.304C13.452 14.5527 13.5667 14.732 13.6249 14.8483L13.6375 14.8736L13.6552 14.8958C13.729 14.9879 13.8554 15.1952 14.0389 15.5392L14.044 15.5488L14.0499 15.558C14.2555 15.8777 14.3852 16.095 14.4464 16.2176L14.4591 16.2429L14.4768 16.2651C14.5556 16.3635 14.7178 16.6106 14.9709 17.0248C15.2221 17.4358 15.3913 17.718 15.4804 17.8739L15.6299 18.1355L15.872 17.9559L17.9944 16.3812L18.2996 16.1548L17.9834 15.9439L17.3672 15.5332V15.5331L17.364 15.531C15.0455 14.0332 13.3977 12.8403 12.4075 11.9495C12.7807 11.8151 13.1729 11.6984 13.5842 11.5997V11.5998L13.5913 11.5979C14.1807 11.4392 14.663 11.3273 15.0402 11.2607L15.0403 11.261L15.0518 11.2584C15.4549 11.1688 16.1332 11.0444 17.0912 10.8847C18.0727 10.7249 18.8162 10.5991 19.3207 10.5074Z"
											fill="#ADB0AD"
											stroke="#2F2B31"
											strokeWidth="0.534884"
										/>
									</g>
									<defs>
										<clipPath id="clip0_1327_6963">
											<rect
												width="23"
												height="23"
												fill="white"
											/>
										</clipPath>
									</defs>
								</svg>
							</span>
						</div>
					);
				})}
			</motion.div>
		</div>
	);
};

export default TextScroll;
