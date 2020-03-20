import React, { useState } from 'react';
import Slider from 'rc-slider';
import classNames from 'classnames';
// import 'rc-slider/assets/index.css';
import { RcSlider, Row, MiniContainer, Toggle, MiniToggle, LabelToggle, ToggleTools } from '../../app/styles';

function Video() {

	const [ slider, setSlider ] =  useState(50);
	const [ slider1, setSlider1 ] =  useState(50);

	function sliderFunc(value) { setSlider(value); }
	function sliderFunc1(value) { setSlider1(value); }

	return (
		<>
			<RcSlider>
				<Slider className="white" onChange={sliderFunc} startPoint={50} value={slider} />
			</RcSlider>
			{/* <input type="text" value={slider}/> */}

			<RcSlider>
				<Slider onChange={sliderFunc1} startPoint={100} value={slider1} />
			</RcSlider>
		</>
	)
}

export default Video;
