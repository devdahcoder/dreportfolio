import React from "react";
import SectionContainer from "../section-container";
import WorkList from "../work-list";

type Props = {};

const Work = (props: Props) => {
	return (
		<SectionContainer
			containerClassName="py-28"
			className="flex flex-col items-center"
		>
			<WorkList />
		</SectionContainer>
	);
};

export default Work;
