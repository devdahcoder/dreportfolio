import React from 'react';

type Props = {
	autoPlay?: boolean;
	muted?: boolean;
	loop?: boolean;
	src?: string;
	type?: string;
	controls?: boolean;
	className?: string;
	style?: React.CSSProperties;
	disablePictureInPicture?: boolean;
	height?: string;
	width?: string;
	videoRef?: React.MutableRefObject<HTMLVideoElement>;
};

const Video = (props: Props) => {
	const classStyle = props.className ? props.className : "";

	return (
		<div className="block w-full">
			<div
				className={`relative block overflow-hidden pb-[100%] ${classStyle}`}
			>
				<video
					ref={props.videoRef}
					className="w-full h-full absolute top-0 left-0 select-none object-cover"
					style={props?.style}
					autoPlay={props?.autoPlay}
					muted={props?.muted}
					loop={props?.loop}
					controls={props?.controls}
					disablePictureInPicture={props?.disablePictureInPicture}
					height={props?.height}
					width={props?.width}
				>
					<source src={props?.src} type={props?.type} />
				</video>
			</div>
		</div>
	);
};

export default Video;