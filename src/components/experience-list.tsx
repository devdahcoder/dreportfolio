import React from 'react';
import { experienceContent } from "../../content/experience-content";
import { IExperience } from '../../interface';
import ExperienceItem from './experience-item';
import Folder from '../../icon/folder';

type Props = {}

const ExperienceList = (props: Props) => {
    return (
		<div className="flex flex-col items-start gap-y-5">
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
					href="http://"
					target="_blank"
					rel="noopener noreferrer"
					className="w-full flex flex-row items-center justify-center text-orange-600 gap-x-3 text-xl font-medium no-underline"
				>
					Download resume
					<Folder className="fill-white w-5 h-5" />
				</a>
			</div>
		</div>
	);
}

export default ExperienceList