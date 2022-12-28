import React from 'react'
import ExperienceList from '../experience-list'

type Props = {}

const Experience = (props: Props) => {
    return (
		<div className="">
			<div className="flex flex-col gap-y-10 w-4/5 mt-0 mx-auto  font-cabinetgrotesk">
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