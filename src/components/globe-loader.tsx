import gsap from "gsap";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

type Props = {
  className?: string;
  loadingPercentage?: number;
  isLoaded: boolean;
};

const GlobeLoader = (props: Props) => {
  const { className, loadingPercentage, isLoaded } = props;
  const container = useRef(null);


  useGSAP(
    () => {
      if (isLoaded) {
        gsap.fromTo(
          ".loader--cover",
          {
            yPercent: -100,
            opacity: 0,
            delay: 0.7,
          },
          {
            yPercent: 0,
            opacity: 1,
            delay: 0.7,
            duration: 1,
            ease: "sine.inOut",
            onComplete: () => {
              gsap.fromTo(
                ".loader--container",
                { yPercent: 0, opacity: 1, delay: 0.7 },
                {
                  yPercent: 100,
                  delay: 0.7,
                  duration: 1,
                  ease: "expo.in",
                  onComplete: () => {
                    gsap.to(".loader--container", { display: "hidden" });
                  },
                },
              );
            },
          },
        );
      }
    },
    { dependencies: [isLoaded] },
  );

  return (
    <div
      ref={container}
      className={`loader--container border-2 opacity-100 bg-white fixed top-0 left-0 h-full w-full flex flex-row items-center justify-center z-50`}
    >
      <div className="loader--cover w-screen h-screen fixed z-50 bg-black opacity-0"></div>

      <div
        className={`border relative bg-white  w-44 h-44 md:w-60 md:h-60 lg:w-full lg:h-full ${className}`}
      >
        <p className="text-black text-4xl md:text-5xl lg:text-[15rem] font-medium font-cabinetgrotesk absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 md:left-0 md:bottom-0 md:-translate-x-0 md:-translate-y-0">
          {loadingPercentage}%
        </p>
      </div>
    </div>
  );
};

export default GlobeLoader;
