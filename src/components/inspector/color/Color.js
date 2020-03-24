import React, { useState } from 'react';
import classNames from 'classnames';
import Slider from 'rc-slider';
import { Tabs, RoundedButton, InputLabel, Input, RcSlider, Row, MiniContainer, Toggle, LabelToggle, ToggleTools } from '../../app/styles';
import LutsDropdown from '../../../img/color/luts-dropdown.png';
import ColorWheelsImg from '../../../img/color/color-wheels.png';
import ColorAdjImg from '../../../img/color/color-curves.png'

function Color() {
	// LUTS
	const [ toggleLuts, setLuts ] = useState(false);
	const [ lutsSlider, setLutsSlider ] = useState(false);

	const [ slider1, setSlider1 ] =  useState(100);
	const [ handleSlider1, setHandleSlider1 ] = useState(false);
	function sliderFunc1(value) {
		setHandleSlider1(true);
		setSlider1(value);
	}

	// COLOR WHEELS
	const [ toggleWheels, setWheels ] = useState(false);
	const [ wheelsImg, setWheelsImg ] = useState(false);
	const [ wheelsSliders, serWheelsSliders ] = useState(false);

	const tabsColorWheel = [
		{ id: 0, label: 'Lift' },
		{ id: 1, label: 'Gamma' },
		{ id: 2, label: 'Gain' },
		{ id: 3, label: 'Offset' },
	]

	const [ activeTab1, setTab1 ] = useState(0);

	const [ slider2, setSlider2 ] =  useState(50);
	const [ handleSlider2, setHandleSlider2 ] = useState(false);
	function sliderFunc2(value) {
		setHandleSlider2(true);
		setSlider2(value);
	}

	const [ slider3, setSlider3 ] =  useState(50);
	const [ handleSlider3, setHandleSlider3 ] = useState(false);
	function sliderFunc3(value) {
		setHandleSlider3(true);
		setSlider3(value);
	}

	const [ slider4, setSlider4 ] =  useState(50);
	const [ handleSlider4, setHandleSlider4 ] = useState(false);
	function sliderFunc4(value) {
		setHandleSlider4(true);
		setSlider4(value);
	}

	const [ slider5, setSlider5] =  useState(50);
	const [ handleSlider5, setHandleSlider5 ] = useState(false);
	function sliderFunc5(value) {
		setHandleSlider5(true);
		setSlider5(value);
	}

	const [ slider6, setSlider6 ] =  useState(50);
	const [ handleSlider6, setHandleSlider6 ] = useState(false);
	function sliderFunc6(value) {
		setHandleSlider6(true);
		setSlider6(value);
	}

	// COLOR ADJUSTMENTS
	const [ toggleAdj, setToggleAdj ] = useState(false);
	const [ adjCurves, setAdjCurves ] = useState(false);
	const [ adjSliders, setAdjSliders ] = useState(false);

	const [ slider7, setSlider7 ] =  useState(50);
	const [ handleSlider7, setHandleSlider7 ] = useState(false);
	function sliderFunc7(value) {
		setHandleSlider7(true);
		setSlider7(value);
	}

	const [ slider8, setSlider8 ] =  useState(50);
	const [ handleSlider8, setHandleSlider8 ] = useState(false);
	function sliderFunc8(value) {
		setHandleSlider8(true);
		setSlider8(value);
	}

	const [ slider9, setSlider9 ] =  useState(50);
	const [ handleSlider9, setHandleSlider9 ] = useState(false);
	function sliderFunc9(value) {
		setHandleSlider9(true);
		setSlider9(value);
	}

	const [ slider10, setSlider10 ] =  useState(50);
	const [ handleSlider10, setHandleSlider10 ] = useState(false);
	function sliderFunc10(value) {
		setHandleSlider10(true);
		setSlider10(value);
	}

	const [ slider11, setSlider11 ] =  useState(50);
	const [ handleSlider11, setHandleSlider11 ] = useState(false);
	function sliderFunc11(value) {
		setHandleSlider11(true);
		setSlider11(value);
	}

	const [ slider12, setSlider12 ] =  useState(50);
	const [ handleSlider12, setHandleSlider12 ] = useState(false);
	function sliderFunc12(value) {
		setHandleSlider12(true);
		setSlider12(value);
	}

	const [ slider13, setSlider13 ] =  useState(50);
	const [ handleSlider13, setHandleSlider13 ] = useState(false);
	function sliderFunc13(value) {
		setHandleSlider13(true);
		setSlider13(value);
	}

	const [ slider14, setSlider14 ] =  useState(50);
	const [ handleSlider14, setHandleSlider14 ] = useState(false);
	function sliderFunc14(value) {
		setHandleSlider14(true);
		setSlider14(value);
	}

	const [ slider15, setSlider15 ] =  useState(50);
	const [ handleSlider15, setHandleSlider15 ] = useState(false);
	function sliderFunc15(value) {
		setHandleSlider15(true);
		setSlider15(value);
	}

	const [ slider16, setSlider16 ] =  useState(50);
	const [ handleSlider16, setHandleSlider16 ] = useState(false);
	function sliderFunc16(value) {
		setHandleSlider16(true);
		setSlider16(value);
	}

	const [ slider17, setSlider17 ] =  useState(50);
	const [ handleSlider17, setHandleSlider17 ] = useState(false);
	function sliderFunc17(value) {
		setHandleSlider17(true);
		setSlider17(value);
	}

	return (
		<>
			{/* LUTS */}
			<Row>
				<Toggle onClick={()=> setLuts(!toggleLuts)} className={classNames('', toggleLuts ? "active" : "")}/>
				<LabelToggle>LUTs</LabelToggle>
				<ToggleTools className={classNames('ic-controls', lutsSlider ? "active" : "")} onClick={()=> setLutsSlider(!lutsSlider)}/>
			</Row>

			<div className={lutsSlider ? "none" : ""}>
				<img src={LutsDropdown} width="294" style={{"margin":"0px 0px 3px 15px"}}/>

				<RcSlider style={{"margin":"0px 0px 9px 0px"}}>
					<InputLabel>Intensity</InputLabel>
					<Input className="input" type="text" value={slider1} min="0" max="100" onChange={(event) => setSlider1(event.target.value)}/>
					<Slider className={classNames('white', handleSlider1 === true ? 'active': '')} onChange={sliderFunc1} startPoint={100} value={slider1} />
				</RcSlider>
			</div>

			{/* COLOR WHEELS */}
			<Row className="header">
				<Toggle onClick={()=> setWheels(!toggleWheels)} className={classNames('', toggleWheels ? "active" : "")}/>
				<LabelToggle>Color Wheels</LabelToggle>
				<ToggleTools className={classNames('ic-controls', wheelsSliders ? "active" : "")} onClick={()=> serWheelsSliders(!wheelsSliders)}/>
				<ToggleTools className={classNames('ic-colorwheel', wheelsImg ? "active" : "")} onClick={()=> setWheelsImg(!wheelsImg)}/>
				<ToggleTools className={classNames('ic-auto')}/>
			</Row>

			<img src={ColorWheelsImg} width="294" style={{"margin":"2px 0px 3px 15px"}} className={wheelsImg ? "none" : ""}/>

			<Row className={wheelsImg ? "none" : ""}>
				<RoundedButton className="center">Offset</RoundedButton>
			</Row>

			<div className={wheelsSliders ? "none" : ""}>
				<Tabs style={{"margin":"2px 24px 7px 15px"}}>
					{tabsColorWheel.map((tab, i)=> (
						<div className={classNames('btn-tab four', i === activeTab1 ? "active" : "")} onClick={()=> setTab1(i)}>{tab.label}</div>
					))}
				</Tabs>

				<RcSlider style={{"margin":"0px 0px 2px 0px"}} className={toggleWheels ? "none" : ""}>
					<InputLabel>Luminance</InputLabel>
					<Input className="input" type="text" value={slider2} min="0" max="100" onChange={(event) => setSlider2(event.target.value)}/>
					<Slider className={classNames('lum', handleSlider2 === true ? 'active': '')} onChange={sliderFunc2} startPoint={50} value={slider2} />
				</RcSlider>

				<RcSlider style={{"margin":"0px 0px 3px 0px"}} className={toggleWheels ? "none" : ""}>
					<InputLabel>Red</InputLabel>
					<Input className="input" type="text" value={slider3} min="0" max="100" onChange={(event) => setSlider3(event.target.value)}/>
					<Slider className={classNames('red', handleSlider3 === true ? 'active': '')} onChange={sliderFunc3} startPoint={50} value={slider3} />
				</RcSlider>

				<RcSlider style={{"margin":"0px 0px 3px 0px"}} className={toggleWheels ? "none" : ""}>
					<InputLabel>Green</InputLabel>
					<Input className="input" type="text" value={slider4} min="0" max="100" onChange={(event) => setSlider4(event.target.value)}/>
					<Slider className={classNames('green', handleSlider4 === true ? 'active': '')} onChange={sliderFunc4} startPoint={50} value={slider4} />
				</RcSlider>

				<RcSlider style={{"margin":"0px 0px 3px 0px"}} className={toggleWheels ? "none" : ""}>
					<InputLabel>Blue</InputLabel>
					<Input className="input" type="text" value={slider5} min="0" max="100" onChange={(event) => setSlider5(event.target.value)}/>
					<Slider className={classNames('blue', handleSlider5 === true ? 'active': '')} onChange={sliderFunc5} startPoint={50} value={slider5} />
				</RcSlider>

				<RcSlider style={{"margin":"0px 0px 9px 0px"}} className={toggleWheels ? "none" : ""}>
					<InputLabel>All</InputLabel>
					<Input className="input" type="text" value={slider6} min="0" max="100" onChange={(event) => setSlider6(event.target.value)}/>
					<Slider className={classNames('default', handleSlider6 === true ? 'active': '')} onChange={sliderFunc6} startPoint={50} value={slider6} />
				</RcSlider>
			</div>

			{/* COLOR ADJUSTMENTS */}
			<Row className="header">
				<Toggle onClick={()=> setToggleAdj(!toggleAdj)} className={classNames('', toggleAdj ? "active" : "")}/>
				<LabelToggle>Color Adjustments</LabelToggle>
				<ToggleTools className={classNames('ic-controls', adjSliders ? "active" : "")} onClick={()=> setAdjSliders(!adjSliders)}/>
				<ToggleTools className={classNames('ic-curves', adjCurves ? "active" : "")} onClick={()=> setAdjCurves(!adjCurves)}/>
			</Row>

			<img src={ColorAdjImg} width="305" style={{"margin":"11px 0px 8px 7px"}} className={adjCurves ? "none" : ""}/>

			<div className={adjSliders ? "none" : ""}>
				<RcSlider style={{"margin":"0px 0px 3px 0px"}}>
					<InputLabel>Temperature</InputLabel>
					<Input className="input" type="text" value={slider7} min="0" max="100" onChange={(event) => setSlider7(event.target.value)}/>
					<Slider className={classNames('temperature', handleSlider7 === true ? 'active': '')} onChange={sliderFunc7} startPoint={50} value={slider7} />
				</RcSlider>

				<RcSlider style={{"margin":"0px 0px 3px 0px"}}>
					<InputLabel>Tint</InputLabel>
					<Input className="input" type="text" value={slider8} min="0" max="100" onChange={(event) => setSlider8(event.target.value)}/>
					<Slider className={classNames('tint', handleSlider8 === true ? 'active': '')} onChange={sliderFunc8} startPoint={50} value={slider8} />
				</RcSlider>

				<RcSlider style={{"margin":"0px 0px 3px 0px"}}>
					<InputLabel>Contrast</InputLabel>
					<Input className="input" type="text" value={slider9} min="0" max="100" onChange={(event) => setSlider9(event.target.value)}/>
					<Slider className={classNames('bw', handleSlider9 === true ? 'active': '')} onChange={sliderFunc9} startPoint={50} value={slider9} />
				</RcSlider>

				<RcSlider style={{"margin":"0px 0px 3px 0px"}}>
					<InputLabel>Pivot</InputLabel>
					<Input className="input" type="text" value={slider10} min="0" max="100" onChange={(event) => setSlider10(event.target.value)}/>
					<Slider className={classNames('pivot', handleSlider10 === true ? 'active': '')} onChange={sliderFunc10} startPoint={50} value={slider10} />
				</RcSlider>

				<RcSlider style={{"margin":"0px 0px 3px 0px"}}>
					<InputLabel>Midtone Detail</InputLabel>
					<Input className="input" type="text" value={slider11} min="0" max="100" onChange={(event) => setSlider11(event.target.value)}/>
					<Slider className={classNames('detail', handleSlider11 === true ? 'active': '')} onChange={sliderFunc11} startPoint={50} value={slider11} />
				</RcSlider>

				<RcSlider style={{"margin":"0px 0px 3px 0px"}}>
					<InputLabel>Color Boost</InputLabel>
					<Input className="input" type="text" value={slider12} min="0" max="100" onChange={(event) => setSlider12(event.target.value)}/>
					<Slider className={classNames('boost', handleSlider12 === true ? 'active': '')} onChange={sliderFunc12} startPoint={50} value={slider12} />
				</RcSlider>

				<RcSlider style={{"margin":"0px 0px 3px 0px"}}>
					<InputLabel>Shadows</InputLabel>
					<Input className="input" type="text" value={slider13} min="0" max="100" onChange={(event) => setSlider13(event.target.value)}/>
					<Slider className={classNames('shadow', handleSlider13 === true ? 'active': '')} onChange={sliderFunc13} startPoint={50} value={slider13} />
				</RcSlider>

				<RcSlider style={{"margin":"0px 0px 3px 0px"}}>
					<InputLabel>Highlights</InputLabel>
					<Input className="input" type="text" value={slider14} min="0" max="100" onChange={(event) => setSlider14(event.target.value)}/>
					<Slider className={classNames('highlight', handleSlider14 === true ? 'active': '')} onChange={sliderFunc14} startPoint={50} value={slider14} />
				</RcSlider>

				<RcSlider style={{"margin":"0px 0px 3px 0px"}}>
					<InputLabel>Saturation</InputLabel>
					<Input className="input" type="text" value={slider15} min="0" max="100" onChange={(event) => setSlider15(event.target.value)}/>
					<Slider className={classNames('saturation', handleSlider15 === true ? 'active': '')} onChange={sliderFunc15} startPoint={50} value={slider15} />
				</RcSlider>

				<RcSlider style={{"margin":"0px 0px 3px 0px"}}>
					<InputLabel>Hue</InputLabel>
					<Input className="input" type="text" value={slider16} min="0" max="100" onChange={(event) => setSlider16(event.target.value)}/>
					<Slider className={classNames('hue-global', handleSlider16 === true ? 'active': '')} onChange={sliderFunc16} startPoint={50} value={slider16} />
				</RcSlider>

				<RcSlider style={{"margin":"0px 0px 19px 0px"}}>
					<InputLabel>Lum Mix</InputLabel>
					<Input className="input" type="text" value={slider17} min="0" max="100" onChange={(event) => setSlider17(event.target.value)}/>
					<Slider className={classNames('mix', handleSlider17 === true ? 'active': '')} onChange={sliderFunc17} startPoint={50} value={slider17} />
				</RcSlider>
			</div>
		</>
	)
}

export default Color;
