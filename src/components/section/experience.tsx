import React from 'react'
import ExperienceList from '../experience-list'

type Props = {}

const Experience = (props: Props) => {
    return (
      <div className="pt-16 md:pt-20 pb-24">
        <div
          className={`w-11/12 md:w-[80%] mt-0 mx-auto flex flex-col items-center gap-y-16 md:gap-y-24 !px-3`}
        >
          <div className="text-start flex flex-row items-start w-full ">
            <div className="font-semibold font-untitled text-3xl md:text-4xl text-[#ADB0AD]">
              <p>Experience</p>
            </div>
          </div>

          <ExperienceList />
        </div>
      </div>
    );
}

export default Experience