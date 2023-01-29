import React from 'react'

type Props = {}

const Time = (props: Props) => {

    const [timeFormat, setTimeFormat] = React.useState<string>("");
	const [timeHour, setTimeHour] = React.useState<number>(0);
	const [timeMinute, setTimeMinute] = React.useState<string>("");

    React.useEffect(() => {
		const interval = setInterval(() => {
			const getCurrentDay = new Date();

			const getCurrentHour = getCurrentDay.getHours();

			const getCurrentMinute = getCurrentDay.getMinutes();

			const getAmPm = getCurrentHour >= 12 ? "PM" : "AM";

			const getHour = getCurrentHour % 12 || 12;

			let getTwentyFourHour =
				getCurrentHour <= 9
					? `0${getCurrentHour}`
					: `${getCurrentHour}`;

			let getMinute =
				getCurrentMinute <= 9
					? `0${getCurrentMinute}`
					: `${getCurrentMinute}`;

			setTimeFormat(getAmPm);
			setTimeHour(getHour);
			setTimeMinute(getMinute);
		}, 1000);

		return () => clearInterval(interval);
    }, []);
    
  return (
		<div className="fixed bottom-5 right-5 pointer-events-none z-50">
			<div className="flex flex-row items-center text-sm animate-pulse text-white">
				{timeHour}:{timeMinute} {timeFormat} GMT, Lagos
			</div>
		</div>
  );
}

export default Time