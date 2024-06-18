import React, { useRef } from "react";
import Wave from "../../../icon/wave";
import ImageContainer from "../image-container";
import Video from "../video";
import CircleText from "../cirlcle-text";

type Props = {
  cursorType: string;
  setCursorType: React.Dispatch<React.SetStateAction<string>>;
  videoRef?: React.MutableRefObject<HTMLVideoElement>;
  handleVideoPlay: () => void;
};

const About = (props: Props) => {
  const { cursorType, setCursorType, videoRef, handleVideoPlay } = props;

  return (
    <section id="about" className="pb-20 pt-10 ">
      <div className="flex flex-col gap-y-16 w-[85%] mx-auto my-0">
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
            <div className="flex flex-col text-2xl font-medium gap-y-10 text-white">
              <div>
                <p className="leading-normal">
                  I’ve been Designing for 3+ years with skills in building
                  custom digital experiences for Landing pages, Saas, Fintech,
                  Healthcare and E-commerce.
                </p>
              </div>

              <div>
                <p className="leading-normal">
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
