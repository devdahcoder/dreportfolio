import React from 'react';
import { experienceContent } from "../../content/experience-content";
import { IExperience } from '../../interface';
import ExperienceItem from './experience-item';
import Folder from '../../icon/folder';
import { motion } from "framer-motion";

type Props = {}

const ExperienceList = (props: Props) => {

	const experienceVariant = {
		hidden: {
			opacity: 0.5,
		},
		visible: {
			opacity: 1,
			transition: {
				ease: "easeInOut",
				delayChildren: 0.5,
				duration: 3,
				staggerChildren: 0.3,
			},
		},
	};

    return (
		<motion.div
			variants={experienceVariant}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			className="flex flex-col items-start gap-y-10"
		>
			{experienceContent.map((props: IExperience, index: number) => {
				const { text, detail, href, id } = props;

				return (
					<ExperienceItem
						text={text}
						detail={detail}
						href={href}
						id={id}
					/>
				);
			})}

			<div className="">
				<a
					download={`Damilare Resume`}
					type="pdf"
					href="./file/dre_resume.pdf"
					className="w-full flex flex-row items-center justify-center text-orange-600 gap-x-3 text-xl font-medium no-underline"
				>
					Download resume
					<Folder className="fill-white w-5 h-5" />
				</a>
			</div>
		</motion.div>
	);
}

export default ExperienceList