import React from "react";
import WorkItem from "./work-item";
import { workContent } from "../../content/work-content";
import { IWork } from "../../interface";
import { motion } from "framer-motion";

type Props = {};

const WorkList = (props: Props) => {
	const workVariant = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
		},
	};

	return (
		<motion.div
			variants={workVariant}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			className="flex flex-col gap-y-24 md:gap-y-36 relative"
		>
			{workContent.map((props: IWork, index: number) => {
				const { name, detail, href, id, image, caseStudy } = props;

				return (
          <WorkItem
            index={index}
            key={index}
            name={name}
            detail={detail}
            href={href}
            id={id}
            image={image}
            caseStudy={caseStudy}
          />
        );
			})}
		</motion.div>
	);
};

export default WorkList;
