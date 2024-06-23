import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

type Props = {
  className?: string;
  loadingPercentage?: number;
  isLoaded: boolean;
  setIsLoadingComplete: React.Dispatch<React.SetStateAction<boolean>>;
};

const Loader = (props: Props) => {
  const { className, loadingPercentage, isLoaded, setIsLoadingComplete } =
    props;
  const container = useRef(null);

  useGSAP(
    () => {
      if (isLoaded) {
        gsap.fromTo(
          ".loader--grid--container",
          {
            visibility: "hidden",
          },
          {
            visibility: "visible",
            onComplete: () => {
              gsap.fromTo(
                ".loader--grid",
                {
                  yPercent: -100,
                  visibility: "hidden",
                },
                {
                  visibility: "visible",
                  yPercent: 0,
                  stagger: 0.1,
                  duration: 1,
                  ease: "power4.out",
                  onComplete: () => {
                    gsap.fromTo(
                      ".loader--cover",
                      {
                        yPercent: -100,
                        visibility: "hidden",
                      },
                      {
                        yPercent: 0,
                        visibility: "visible",
                        duration: 0.7,
                        ease: "sine.inOut",
                        onComplete: () => {
                          setIsLoadingComplete(true);
                          gsap.fromTo(
                            ".loader--container",
                            { yPercent: 0, opacity: 1 },
                            {
                              yPercent: 100,
                              duration: 1,
                              ease: "expo.in",
                              onComplete: () => {
                                gsap.to(".loader--container", {
                                  display: "hidden",
                                });
                              },
                            },
                          );
                        },
                      },
                    );
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
      className={`loader--container opacity-100 bg-white fixed top-0 left-0 h-full w-full flex flex-row items-center justify-center z-50`}
    >
      <div className="loader--cover w-screen h-screen fixed z-50 bg-black invisible "></div>

      <div className="loader--grid--container w-screen h-screen flex flex-row fixed z-30 invisible ">
        {Array.of(1, 2, 3, 4, 5, 6)?.map((_, index) => (
          <div
            key={index}
            className="loader--grid w-full h-screen bg-slate-400 border-r-slate-600 invisible last:border-none last:border-0"
          ></div>
        ))}
      </div>

      <div className={` relative bg-white w-full h-full ${className}`}>
        <p className="text-black text-9xl lg:text-[15rem] font-medium font-cabinetgrotesk absolute left-0 bottom-0 -translate-x-0 -translate-y-0">
          {loadingPercentage}%
        </p>
      </div>
    </div>
  );
};

export default Loader;
