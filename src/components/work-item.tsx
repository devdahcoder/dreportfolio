import React from 'react';
import ImageContainer from './image-container';
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
		<div className="relative font-cabinetgrotesk">
			<div>
				<ImageContainer
					imageLink={`${image}`}
					className={"w-[32rem] h-[340px] rounded-xl"}
				/>
			</div>
			<div className="absolute -left-56 top-5 text-5xl font-semibold">
				<p>{name}</p>
			</div>
			<div className="absolute top-5 -right-60 w-full max-w-xs text-lg font-normal">
				<p>{detail}</p>
			</div>
		</div>
	);
}

export default WorkItem