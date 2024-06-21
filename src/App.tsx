import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useCursorHook, usePercentageLoaderHook } from "../hook/index";
import Cursor from "./components/cursor";
import Loader from "./components/loader";
import Header from "./components/header";
import About from "./components/section/about";
import Contact from "./components/section/contact";
import Experience from "./components/section/experience";
import Footer from "./components/section/footer";
import Hero from "./components/section/hero";
import Work from "./components/section/work";
import TextScroll from "./components/text-scroll";
import Time from "./components/time";

gsap.registerPlugin(useGSAP);

function App() {
  const { cursorType, mousePosition, setCursorType } = useCursorHook();
  const [isLoadingComplete, setIsLoadingComplete] = useState<boolean>(false);
  // const [isLoaded, setIsLoaded ] = useState<boolean>(true);

  const { isLoaded, loadingPercentage } = usePercentageLoaderHook();

  useGSAP(() => {
    if (isLoadingComplete) {
      gsap.fromTo(
        ".main--page",
        { display: "none" },
        { display: "block", delay: 0.5 },
      );
    }
  }, [isLoadingComplete]);

  return (
    <div className="font-inter">
      <Time />
      <Loader
        isLoaded={isLoaded}
        loadingPercentage={loadingPercentage}
        setIsLoadingComplete={setIsLoadingComplete}
      />
      <div className="hidden main--page">
        {/* <Cursor
					cursorType={cursorType}
					setCursorType={setCursorType}
					mousePosition={mousePosition}
				/> */}
        <Header cursorType={cursorType} setCursorType={setCursorType} />
        <Hero
          cursorType={cursorType}
          setCursorType={setCursorType}
          isLoaded={isLoaded}
        />
        {/* <TextScroll /> */}
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
