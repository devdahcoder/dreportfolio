import gsap from "gsap";
import React, { useEffect } from "react";

type Props = { hasPageCompletedLoading: boolean };

const Cover = ({ hasPageCompletedLoading }: Props) => {
  useEffect(() => {
    if (hasPageCompletedLoading) {
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
          onComplete: () => {
            gsap.fromTo(
              ".loader--cover",
              { yPercent: 0, opacity: 1, delay: 0.7 },
              {
                yPercent: 100,
                opacity: 0.8,
                delay: 0.7,
              },
            );
          },
        },
      );
    }
  }, [hasPageCompletedLoading]);
  return (
    <div className="loader--cover w-screen h-screen fixed z-50 bg-black opacity-0"></div>
  );
};

export default Cover;
