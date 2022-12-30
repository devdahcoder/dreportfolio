import React from 'react'
import WorkItem from './work-item';
import {workContent} from '../../content/work-content'
import { IWork } from '../../interface';

type Props = {}

const WorkList = (props: Props) => {
    return (
		<div className="flex flex-col items-center gap-y-36 relative">
            {workContent.map((props: IWork, index: number) => {

                const { name, detail, href, id, image } = props;
                
                return <WorkItem key={index} name={name} detail={detail} href={href} id={id} image={image} />;
            })}
		</div>
	);
}

export default WorkList