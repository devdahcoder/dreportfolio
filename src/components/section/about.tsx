import React, { useEffect, useRef, useState } from "react";
import Wave from "../../../icon/wave";
import ImageContainer from "../image-container";
import Video from "../video";
import CircleText from "../cirlcle-text";

type Props = {
  cursorType: string;
  setCursorType: React.Dispatch<React.SetStateAction<string>>;
};

const About = (props: Props) => {
  const { cursorType, setCursorType } = props;

  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement>(
    null,
  ) as React.MutableRefObject<HTMLVideoElement>;

  const handleVideoPlay = () => {
    setIsVideoPlaying((prev) => !prev);
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    if (isVideoPlaying) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
  }, [isVideoPlaying]);

  useEffect(() => {
    videoRef.current?.play();
  }, []);

  return (
    <section id="about" className="pt-10 md:pt-0 pb-10 md:pb-20 ">
      <div className="flex flex-col gap-y-16 w-11/12 md:w-[85%] mx-auto my-0">
        <div
          className={`flex flex-col lg:flex-row px-3 items-center lg:items-start justify-center gap-x-0 md:gap-x-16 lg:gap-x-28 gap-y-20 
				lg:gap-y-0 `}
        >
          <div className="flex flex-col w-full gap-y-12">
            <Video
              videoRef={videoRef}
              src={`./video/dre.mp4`}
              type={`video/mp4`}
              muted={true}
              loop={true}
              autoPlay={true}
              className={" rounded-lg"}
              cursorType={cursorType}
              setCursorType={setCursorType}
              onClick={handleVideoPlay}
            />
          </div>

          <div
            className="flex flex-col gap-y-10 w-full 
                "
          >
            <div className="flex flex-col text-[1.1rem] md:text-[1.4rem] font-medium gap-y-10 text-white">
              <div>
                <p className="leading-relaxed">
                  I’ve been Designing for 3+ years with skills in building
                  custom digital experiences for Landing pages, Saas, Fintech,
                  Healthcare and E-commerce.
                </p>
              </div>

              <div>
                <p className="leading-relaxed">
                  From Designing Interfaces, to animating static assets, I try
                  to blend how things look and how they work together smoothly
                  in my work, making sure both are equally important.
                </p>
              </div>
              <div>
                <CircleText
                  text={"- Download - Resume"}
                  cursorType={cursorType}
                  setCursorType={setCursorType}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
