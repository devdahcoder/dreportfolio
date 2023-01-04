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
			<div className="flex flex-col gap-y-5 experience--li--div--child w-full max-w-[90%] lg:max-w-[75%]">
				<a
					href="http://"
					target="_blank"
					rel="noopener noreferrer"
					className="text-5xl md:text-7xl font-bold text-white"
				>
					{text}
				</a>
				<div className="font-semibold text-xl bg-gradient-to-tl from-slate-300 to-gray-400 bg-clip-text text-transparent">
					<p>{detail}</p>
				</div>
			</div>
		</li>
	);
}

export default ExperienceItem