import React from 'react'
import WorkItem from './work-item';
import {workContent} from '../../content/work-content'
import { IWork } from '../../interface';
import { motion } from "framer-motion";

type Props = {}

const WorkList = (props: Props) => {

    const workVariant = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			// transition: {
			// 	ease: "easeInOut",
			// 	delayChildren: 0.5,
			// 	duration: 3,
			// 	staggerChildren: 0.3,
			// },
		},
	};
    
    return (
		<motion.div
			variants={workVariant}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			className="flex flex-col md:items-center gap-y-36 relative"
		>
			{workContent.map((props: IWork, index: number) => {
				const { name, detail, href, id, image } = props;

				return (
					<WorkItem
						index={index}
						key={index}
						name={name}
						detail={detail}
						href={href}
						id={id}
						image={image}
					/>
				);
			})}
		</motion.div>
	);
}

export default WorkList