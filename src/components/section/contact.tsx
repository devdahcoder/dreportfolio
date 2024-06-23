import React, { useState } from 'react'
import ParallaxCharacter from "../parallax-character";

type Props = {}

const Contact = (props: Props) => {

	const [contactText, setContactText] = React.useState<Array<Array<string>>>([
		["I", "n", "t", "e", "r", "e", "s", "t", "e", "d"],
		["i", "n"],
		["w", "o", "r", "k", "i", "n", "g"],
		["t", "o", "g", "e", "t", "h", "e", "r", "?"],
		["L", "e", "t"],
		["m", "e"],
		["b", "u", "y"],
		["y", "o", "u"],
		["c", "o", "f", "f", "e", "e"],
	]);

    return (
      <div className="py-20 bg-[#151515]">
        <div className="flex flex-col items-start justify-start gap-y-5 w-11/12 md:w-[85%] mx-auto my-0 px-3 transition-all duration-500 ease-in-out">
          <div>
            <div className="flex flex-row items-center gap-x-3 py-1 px-5 rounded-full border bg-gradient-to-b from-slate-600 to-slate-300 bg-clip-text text-transparent">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>

              <p>Open to opportunities</p>
            </div>
          </div>

          <div className="font-bold font-untitled bg-gradient-to-b from-slate-600 to-slate-300 bg-clip-text text-transparent">
            {/* <span>Interested in working together?</span> <br />{" "} */}
            <div className={`flex flex-row items-center flex-wrap  gap-x-3`}>
              {contactText
                ?.slice(0, 4)
                ?.map((arrayText: Array<string>, index: number) => (
                  <ParallaxCharacter
                    key={index}
                    subContainerClassName={`text-5xl flex flex-row items-center flex-wrap`}
                    className={`flex flex-row items-center flex-wrap !my-1 text-4xl md:text-5xl text-white text-transparent font-untitled`}
                    textArray={arrayText}
                  />
                ))}
            </div>
            <div
              className={`flex flex-row gap-x-3 flex flex-row items-center flex-wrap`}
            >
              {contactText
                ?.slice(4)
                ?.map((arrayText: Array<string>, index: number) => (
                  <ParallaxCharacter
                    key={index}
                    subContainerClassName={`text-5xl flex flex-row items-center flex-wrap`}
                    className={`flex flex-row items-center flex-wrap !my-1 text-4xl md:text-5xl text-white text-transparent font-untitled`}
                    textArray={arrayText}
                  />
                ))}
            </div>
          </div>

          <div>
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center justify-center w-full py-1 text-2xl text-orange-600"
            >
              Drop me a line
            </a>
          </div>
        </div>
      </div>
    );
}

export default Contact