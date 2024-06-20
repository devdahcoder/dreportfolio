import {
	MotionValue,
	motion,
	useMotionValue,
	useScroll,
	useTransform,
} from "framer-motion";
import React, { useRef, useState } from "react";
import CircleText from "../cirlcle-text";
import HeroText from "../hero-text";
import NameRender from "../name-render";
import SectionContainer from "../section-container";
import HeroNameCharacter from "../hero-name-character";
import { useInView } from "react-intersection-observer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

type Props = {
  cursorType: string;
  isLoaded?: boolean;
  setCursorType: React.Dispatch<React.SetStateAction<string>>;
};

export function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const Hero = ({ cursorType, setCursorType, isLoaded }: Props) => {
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
  });
  const characterElement: HTMLDivElement[][] = [];
  const characterContainerElement: HTMLDivElement[] = [];
  const [name, setName] = useState<string>("Damilare Adigun");
  const [heroText, setHeroText] = useState<string>(
    "Product & Interaction Designer helping businesses create memorable experiences with a cup of coffee somewhere in Lagos. Currently, I lead User Experience at ShawnExchange",
  );
  const heroTextArray = heroText.split(" ");

  useGSAP(
    () => {
      if (entry) {
        console.log("entered");
        gsap.fromTo(
          ".character",
          {
            yPercent: 200,
            ease: "power3.out",
            rotate: "70deg",
            opacity: 0,
          },
          {
            opacity: 1,
            rotate: "0deg",
            yPercent: 0,
            duration: 1.3,
            ease: "expo.out",
            stagger: 0.1,
          },
        );
        gsap.fromTo(
          ".hero--text",
          {
            yPercent: 200,
            ease: "power3.out",
            rotate: "30deg",
            opacity: 0,
          },
          {
            opacity: 1,
            rotate: "0deg",
            yPercent: 0,
            duration: 1,
            ease: "back.out(1.7)",
            stagger: 0.1,
          },
        );
      }
    },
    { dependencies: [inView] },
  );

  return (
    <section ref={ref} className={`snap--section pb-24 pt-20 h-screen`}>
      <div
        className={`flex flex-col gap-y-5 md:gap-y-2 w-11/12 md:w-[85%] mt-0 mx-auto`}
      >
        <div
          className="flex flex-col md:flex-row items-start md:items-center gap-y-2 md:gap-y-0 text-justify text-[16vw] sm:text-[13vw] md:text-[9vw] leading-[1] md:leading-[0.7] font-extrabold 
					font-cabinetgrotesk text-white after:inline-block after:w-full"
        >
          <HeroNameCharacter
            character={name.split("")}
            characterClassName="character opacity-0"
            characterElement={characterElement}
            characterContainerElement={characterContainerElement}
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-y-12">
          <div className="flex flex-row flex-wrap gap-x-2 items-center text-[3.4vw] leading-[1.3] font-medium w-full bg-gradient-to-tl from-slate-300 to-gray-400 bg-clip-text text-transparent">
            {heroTextArray?.map((text: string, index: number) => (
              <div key={index}>
                {text.toLowerCase() !== "shawnexchange" && (
                  <HeroText
                    key={index}
                    index={index}
                    text={text}
                    containerClassName={"w-max"}
                    isLoaded={isLoaded}
                  />
                )}
                {text.toLowerCase() === "shawnexchange" && (
                  <HeroText
                    key={index}
                    index={index}
                    containerClassName={"w-max"}
                    isLoaded={isLoaded}
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
