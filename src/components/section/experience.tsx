import React from 'react'
import ExperienceList from '../experience-list'

type Props = {}

const Experience = (props: Props) => {
    return (
		<div className="py-16">
			<div className="flex flex-col gap-y-20 w-11/12 sm:w-4/5 sm:my-0 sm:mx-auto px-3 font-cabinetgrotesk">
				<div className="text-3xl text-slate-400 font-semibold">
					<p>Experience</p>
				</div>

				<div>
					<ExperienceList />
				</div>
			</div>
		</div>
	);
}

export default Experience