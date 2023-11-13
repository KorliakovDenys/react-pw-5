import React, {useEffect, useState} from "react";
import {images} from './images.ts';
import {ImageData} from "./def/ImageData.ts";
import ImageDataContainer from "./components/ImageDataContainer.tsx";
import _ from 'lodash';

const App = () => {
	const [position, setPosition] = useState(0);
	const [seconds, setSeconds] = useState(0);
	const [timerStarted, setTimerStarted] = useState(false);

	const onTimerTick = () => {
		setSeconds(seconds => seconds + 1)
	}

	if (!timerStarted) {
		setInterval(onTimerTick, 1000);
		setTimerStarted(true);
	}

	const changePosition = (step:number) => {
		setPosition(position + step);
	}

	const handlePrevButtonClick = () => {
		changePosition(-1);
	};

	const handleNextButtonClick = () => {
		changePosition(1);
	};

	const onPositionChanged = () => {
		const lastIndex = images.length - 1;
		if (position > lastIndex) {
			setPosition(0)
		} else if (position < 0) {
			setPosition(lastIndex);
		}
		setSeconds(0);
	}

	useEffect(onPositionChanged, [position]);

	useEffect(() => {
		if (seconds > 10) {
			changePosition(1);
		}
	}, [seconds]);

	const style:React.CSSProperties = {
		transform: `translateX(${-position * 640}px)`,
	};

	return (
		<div className="content">
			<div className="carousel">
				<div style={style} className="wrapper">
					{_.map(images, (image:ImageData) => (
						<ImageDataContainer {...image}/>
					))}
				</div>
				<div className="buttons">
					<button className="button" onClick={handlePrevButtonClick}>&#9001;</button>
					<button className="button" onClick={handleNextButtonClick}>&#9002;</button>
				</div>
			</div>
		</div>
	);
};

export default App;
