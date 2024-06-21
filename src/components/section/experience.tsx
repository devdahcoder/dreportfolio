import React from 'react'
import ExperienceList from '../experience-list'

type Props = {}

const Experience = (props: Props) => {
    return (
      <div className="py-16">
        <div
          className="flex flex-col gap-y-16 w-11/12 sm:w-4/5 sm:my-0 sm:mx-auto px-3 font-untitled
		"
        >
          <div className="text-start flex flex-row items-start">
            <div className="font-semibold font-untitled text-4xl text-[#ADB0AD]">
              <p>Experience</p>
            </div>
          </div>

          <ExperienceList />
        </div>
      </div>
    );
}

export default Experience