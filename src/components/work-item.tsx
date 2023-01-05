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
		<div className="flex flex-col-reverse items-start text-start justify-start gap-y-10 relative font-cabinetgrotesk">
			{/* w-[23rem] sm:w-[28rem] md:w-[32rem] h-[23rem] sm:h-[28rem] md: */}
			<div className="w-full max-w-[32rem]">
				<ImageContainer
					imageLink={`${image}`}
					className={"h-[340px] md:w-[32rem] rounded-xl "}
				/>
			</div>
			<div className="relative md:absolute md:-left-36 lg:-left-56 md:top-5 text-4xl sm:text-5xl font-semibold text-white w-full max-w-[70%] sm:max-w-full">
				<p>{name}</p>
			</div>
			<div className="hidden md:block relative md:absolute top-5 -right-60 w-full max-w-xs text-lg font-normal text-white">
				<p>{detail}</p>
			</div>
		</div>
	);
};

export default WorkItem;
