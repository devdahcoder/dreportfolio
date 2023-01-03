import React from "react";
import ImageContainer from "./image-container";
type Props = {
	id?: number | string;
	name: string;
	href?: string;
	detail?: string;
	image?: string;
};

const WorkItem = (props: Props) => {
	const { name, detail, href, id, image } = props;
	return (
		<div className="flex flex-col-reverse relative font-cabinetgrotesk">
			<div>
				<ImageContainer
					imageLink={`${image}`}
					className={
						"w-[20rem] md:w-[32rem] h-[20rem] md:h-[340px] rounded-xl opacity-40 blur-sm"
					}
				/>
			</div>
			<div className="relative md:absolute md:-left-56 md:top-5 text-5xl font-semibold text-white">
				<p>{name}</p>
			</div>
			<div className="hidden relative md:absolute top-5 -right-60 w-full max-w-xs text-lg font-normal text-white">
				<p>{detail}</p>
			</div>
		</div>
	);
};

export default WorkItem;
