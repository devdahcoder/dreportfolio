import React from 'react'

type Props = {
	id?: number | string;
	text: string;
	href?: string;
    detail?: string;
};

const ExperienceItem = (props: Props) => {

    const { text, detail, href, id } = props;

    return (
		<li className="list-none experience--li">
			<div className="flex flex-col gap-y-5 experience--li--div--child border w-full max-w-[75%]">
				<a
					href="http://"
					target="_blank"
					rel="noopener noreferrer"
					className="text-7xl font-bold"
				>
					{text}
                </a>
                <div className="font-semibold text-xl">
                    <p>{ detail }</p>
                </div>
			</div>
		</li>
	);
}

export default ExperienceItem