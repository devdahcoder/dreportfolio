import React, { useState, useEffect, useRef } from "react";
import Header from "./components/header";
import Intro from "./components/intro";
import About from "./components/section/about";
import Contact from "./components/section/contact";
import Footer from "./components/section/footer";
import Experience from "./components/section/experience";
import Work from "./components/section/work";
import { useCursor } from "../hook/index";
import Cursor from "./components/cursor";
import Loader from "./components/loader";
import GlobeLoader from "./components/globe-loader";

function App() {
	const { cursorType, mousePosition, setCursorType } = useCursor();
	const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(true);
	const [loading, setLoading] = useState<boolean>(true);
	const [loadingPercentage, setLoadingPercentage] = useState<number>(0);
	const [progress, setProgress] = useState(0);
	const [animating, setAnimating] = useState(true);

	const videoRef = useRef<HTMLVideoElement>(
		null
	) as React.MutableRefObject<HTMLVideoElement>;

	const handleVideoPlay = () => {
		setIsVideoPlaying(!isVideoPlaying);
	};

	useEffect(() => {
		let isSubscribed = true;

		if (isSubscribed) {
			if (isVideoPlaying) {
				videoRef.current?.play();
			} else {
				videoRef.current?.pause();
			}
		}

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

	return (
		<div className="font-inter">
			{/* <GlobeLoader
				loading={loading}
				loadingPercentage={loadingPercentage}
			/> */}
			{/* <Loader loading={loading} />

			{!loading && (
				
			)} */}
			<div>
					<Cursor
						cursorType={cursorType}
						setCursorType={setCursorType}
						mousePosition={mousePosition}
						isVideoPlaying={isVideoPlaying}
					/>
					<Header
						cursorType={cursorType}
						setCursorType={setCursorType}
					/>
					<Intro
						cursorType={cursorType}
						setCursorType={setCursorType}
					/>
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
