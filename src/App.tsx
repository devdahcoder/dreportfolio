import React, { useEffect, useRef, useState } from "react";
import { useCursor } from "../hook/index";
import Cursor from "./components/cursor";
import GlobeLoader from "./components/globe-loader";
import Header from "./components/header";
import Loader from "./components/loader";
import About from "./components/section/about";
import Contact from "./components/section/contact";
import Experience from "./components/section/experience";
import Footer from "./components/section/footer";
import Hero from "./components/section/hero";
import Work from "./components/section/work";
import TextScroll from "./components/text-scroll";
import Time from "./components/time";

function App() {
	const { cursorType, mousePosition, setCursorType } = useCursor();
	const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(true);
	const [loading, setLoading] = useState<boolean>(true);
	const [loadingPercentage, setLoadingPercentage] = useState<number>(0);
	const [hasPageCompletedLoading, setHasPageCompletedLoading] =
		useState<boolean>(false);
	const [progress, setProgress] = useState(0);
	const [animating, setAnimating] = useState(true);

	const videoRef = useRef<HTMLVideoElement>(
		null
	) as React.MutableRefObject<HTMLVideoElement>;

	const handleVideoPlay = () => {
		setIsVideoPlaying(!isVideoPlaying);
	};

	const videoControlFunction = (isSubscribed: boolean) => {
		if (isSubscribed) {
			if (isVideoPlaying) {
				videoRef.current?.play();
			} else {
				videoRef.current?.pause();
			}
		}
	};

	useEffect(() => {
		let isSubscribed = true;

		videoControlFunction(isSubscribed);

		return () => {
			isSubscribed = false;
		};
	}, [isVideoPlaying, videoRef]);

	useEffect(() => {
		let isSubscribed = true;

		if (isSubscribed) {
			videoRef.current?.play();
		}

		return () => {
			isSubscribed = false;
		};
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			setLoadingPercentage((prevPercentage) => {
				if (prevPercentage === 100) {
					clearInterval(interval);
					return prevPercentage;
				}
				return prevPercentage + 1;
			});
		}, 50);
		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		const timeOut = setTimeout(() => {
			setLoading(false);
		}, 4000);

		return () => clearTimeout(timeOut);
	}, []);

	useEffect(() => {
		let isSubscribed = true;

		if (isSubscribed) {
			if (loadingPercentage === 100) {
				setHasPageCompletedLoading(true);
			}
		}

		return () => {
			isSubscribed = false;
		};
	}, [loadingPercentage]);

	useEffect(() => {
		let isSubscribed = true;

		if (isSubscribed) {
			if (!hasPageCompletedLoading) {
				document.body.classList.add("hide-scroll-bar");
				
			} else {
				document.body.classList.remove("hide-scroll-bar");
			}
		}

		return () => {
			isSubscribed = false;
		};
	}, [hasPageCompletedLoading]);

	return (
		<div className="font-inter">
			<Time />
			<GlobeLoader
				loading={loading}
				loadingPercentage={loadingPercentage}
				hasPageCompletedLoading={hasPageCompletedLoading}
			/>
			<div
				className={`${
					loadingPercentage !== 100
						? "pointer-events-none"
						: "pointer-events-auto"
				}`}
			>
				<Cursor
					cursorType={cursorType}
					setCursorType={setCursorType}
					mousePosition={mousePosition}
					isVideoPlaying={isVideoPlaying}
				/>
				<Header cursorType={cursorType} setCursorType={setCursorType} />
				<Hero
					cursorType={cursorType}
					setCursorType={setCursorType}
					hasPageCompletedLoading={hasPageCompletedLoading}
				/>
				{/* <TextScroll /> */}
				<About
					cursorType={cursorType}
					setCursorType={setCursorType}
					videoRef={videoRef}
					handleVideoPlay={handleVideoPlay}
				/>
				<Work />
				<Experience />
				<Contact />
				<Footer />
			</div>
		</div>
	);
}

export default App;
