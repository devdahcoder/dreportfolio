import React from "react";
import SectionContainer from "../section-container";
import WorkList from "../work-list";

type Props = {};

const Work = (props: Props) => {
	return (
		<SectionContainer
			containerClassName="py-28"
			className="flex flex-col gap-y-20 !w-full"
		>
			<div className="text-start">
				<div className="font-bold font-cabinetgrotesk text-3xl bg-gradient-to-tl from-zinc-300 to-gray-500 bg-clip-text text-transparent">
					<p>Selected Projects</p>
				</div>
			</div>
			<WorkList />
		</SectionContainer>
	);
};

export default Work;
