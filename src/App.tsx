import React, { useEffect, useRef, useState } from "react";
import { useCursorHook, usePercentageLoaderHook } from "../hook/index";
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
  const { cursorType, mousePosition, setCursorType } = useCursorHook();
    const [isLoaded, setIsLoaded] = useState<boolean>(true);

	// const {isLoaded, loadingPercentage} = usePercentageLoaderHook()
	
//   useEffect(() => {
//     let isSubscribed = true;

//     if (isSubscribed) {
//       if (!hasPageCompletedLoading) {
//         document.body.classList.add("hide-scroll-bar");
//       } else {
//         document.body.classList.remove("hide-scroll-bar");
//       }
//     }

//     return () => {
//       isSubscribed = false;
//     };
//   }, [hasPageCompletedLoading]);

  return (
    <div className="font-inter">
      {/* <Time /> */}
      {/*  */}
      {/* <GlobeLoader isLoaded={isLoaded} loadingPercentage={loadingPercentage} /> */}
      <div>
        {/* <Cursor
					cursorType={cursorType}
					setCursorType={setCursorType}
					mousePosition={mousePosition}
					isVideoPlaying={isVideoPlaying}
				/> */}
        <Header cursorType={cursorType} setCursorType={setCursorType} />
        <Hero
          cursorType={cursorType}
          setCursorType={setCursorType}
          isLoaded={isLoaded}
        />
        <TextScroll />
        <About cursorType={cursorType} setCursorType={setCursorType} />
        <Work />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
