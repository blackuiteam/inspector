import React, { useState } from 'react';
import Slider from 'rc-slider';
import classNames from 'classnames';
import { RoundedButton, InputLabel, Input, RcSlider, Row, MiniContainer, Toggle, MiniToggle, LabelToggle, ToggleTools } from '../../app/styles';
import DropdownNormal from '../../../img/dropdown/dropdown-normal.png';
import DropdownPerspective from '../../../img/dropdown/dropdown-perspective-group.png';
import SpeedChange from '../../../img/video/speed-change.png';
import LensCorrection from '../../../img/video/lens-correction.png';
import Attributes from '../../../img/video/attributes.png';
import Dynamic from '../../../img/video/dynamic-zoom.png';

function Video() {

	const [ toggleComposite, setToggleComposite ] = useState(false);
	const [ composite, setComposite ] = useState(false);

	const [ toggleDynamic, setToggleDynamic ] = useState(false);
	const [ dynamic, setDynamic ] = useState(false);

	const [ toggleStablization, setToggleStablization ] = useState(false);
	const [ stablization, setStablization ] = useState(false);

	const [ toggleSpeedChange, setToggleSpeedChange ] = useState(false);
	const [ speedChange, setSpeedChange] = useState(false);

	const [ toggleLens, setToggleLens ] = useState(false);
	const [ lens, setLens] = useState(false);

	const [ attr, setAttr] = useState(false);

	const [ slider, setSlider ] =  useState(50);
	const [ handleSlider, setHandleSlider ] = useState(false);

	const [ slider1, setSlider1 ] =  useState(50);
	const [ slider2, setSlider2 ] =  useState(30);

	const [ slider3, setSlider3 ] =  useState(100);
	const [ handleSlider3, setHandleSlider3 ] = useState(false);

	const [ slider4, setSlider4 ] =  useState(40);
	const [ handleSlider4, setHandleSlider4 ] = useState(false);

	function sliderFunc(value) {
		setHandleSlider(true);
		setSlider(value);
	}

	function sliderFunc1(value) { setSlider1(value); }
	function sliderFunc2(value) { setSlider2(value); }
	function sliderFunc3(value) {
		setHandleSlider3(true);
		setSlider3(value);
	}

	function sliderFunc4(value) {
		setHandleSlider4(true);
		setSlider4(value);
	}

	return (
		<>
			{/* COMPOSITE */}
			<Row>
				<Toggle onClick={()=> setToggleComposite(!toggleComposite)} className={classNames('', toggleComposite ? "active" : "")}/>
				<LabelToggle>Composite</LabelToggle>
				<ToggleTools className={classNames('ic-controls', composite ? "active" : "")} onClick={()=> setComposite(!composite)}/>
			</Row>
			<img src={DropdownNormal} width="294" style={{"margin":"0px 0px 3px 15px"}} className={composite ? "none" : ""}/>

			<RcSlider style={{"margin":"0px 0px 9px 0px"}} className={composite ? "none" : ""}>
				<InputLabel>Opacity</InputLabel>
				<Input className="input" type="text" value={slider} min="0" max="100" onChange={(event) => setSlider(event.target.value)}/>
				<Slider onChange={sliderFunc} startPoint={100} value={slider} />
			</RcSlider>

			{/* DYNAMIC ZOOM */}
			<Row className="header">
				<Toggle onClick={()=> setToggleDynamic(!toggleDynamic)} className={classNames('', toggleDynamic ? "active" : "")}/>
				<LabelToggle>Dynamic Zoom</LabelToggle>
				<ToggleTools className={'ic-controls'}/>
				<ToggleTools className={classNames('ic-dynamic', dynamic ? "active" : "")} onClick={()=> setDynamic(!dynamic)}/>
			</Row>
			<img src={Dynamic} width="296" style={{"margin":"0px 0px 9px 15px"}} className={dynamic ? "none" : ""}/>

			{/* STABLIZATION */}
			<Row className="header">
				<Toggle onClick={()=> setToggleStablization(!toggleStablization)} className={classNames('', toggleStablization ? "active" : "")}/>
				<LabelToggle>Stablization</LabelToggle>
				<ToggleTools className={classNames('ic-controls', stablization ? "active" : "")} onClick={()=> setStablization(!stablization)}/>
			</Row>

			<div className={stablization ? "none" : ""}>
				<img src={DropdownPerspective} width="294" style={{"margin":"1px 0px 3px 15px"}} className={stablization ? "none" : ""}/>

				<RcSlider style={{"margin":"0px 0px 3px 0px"}}>
					<InputLabel>Cropping Ratio</InputLabel>
					<Input className="input" type="text" value={slider1} min="0" max="100" onChange={(event) => setSlider1(event.target.value)}/>
					<Slider className={classNames('')} onChange={sliderFunc1} startPoint={30} value={slider1} />
				</RcSlider>

				<RcSlider style={{"margin":"0px 0px 3px 0px"}}>
					<InputLabel>Smooth</InputLabel>
					<Input className="input" type="text" value={slider2} min="0" max="100" onChange={(event) => setSlider2(event.target.value)}/>
					<Slider className={classNames('')} onChange={sliderFunc2} startPoint={0} value={slider2} />
				</RcSlider>

				<RcSlider style={{"margin":"0px 0px 8px 0px"}}>
					<InputLabel>Strengh</InputLabel>
					<Input className="input" type="text" value={slider3} min="0" max="100" onChange={(event) => setSlider3(event.target.value)}/>
					<Slider className={classNames('white', handleSlider3 === true ? 'active': '')} onChange={sliderFunc3} startPoint={100} value={slider3} />
				</RcSlider>

				<Row>
					<RoundedButton>Stablize</RoundedButton>
				</Row>
			</div>

			{/* SPEED CHANGE */}
			<Row className="header">
				<Toggle onClick={()=> setToggleSpeedChange(!toggleSpeedChange)} className={classNames('', toggleSpeedChange ? "active" : "")}/>
				<LabelToggle>Speed Change</LabelToggle>
				<ToggleTools className={classNames('ic-controls', speedChange ? "active" : "")} onClick={()=> setSpeedChange(!speedChange)}/>
				<ToggleTools className={classNames('ic-speed')}/>
			</Row>
			<img src={SpeedChange} width="294" style={{"margin":"7px 0px 9px 15px"}} className={speedChange ? "none" : ""}/>

			{/* LENS CORRECTION */}
			<Row className="header">
				<Toggle onClick={()=> setToggleLens(!toggleLens)} className={classNames('', toggleLens ? "active" : "")}/>
				<LabelToggle>Lens Correction</LabelToggle>
				<ToggleTools className={classNames('ic-controls', lens ? "active" : "")} onClick={()=> setLens(!lens)}/>
			</Row>
			<div className={lens ? "none" : ""}>
				<img src={LensCorrection} width="294" style={{"margin":"7px 0px 5px 15px"}}/>

				<RcSlider style={{"margin":"0px 0px 8px 0px"}}>
					<InputLabel>Distortion</InputLabel>
					<Input className="input" type="text" value={slider4} min="0" max="100" onChange={(event) => setSlider4(event.target.value)}/>
					<Slider className={classNames('white', handleSlider4 === true ? 'active': '')} onChange={sliderFunc4} startPoint={100} value={slider4} />
				</RcSlider>

				<Row>
					<RoundedButton>Analyze</RoundedButton>
				</Row>
			</div>

			{/* ATTRIBUTES */}
			<Row className="header">
				{/* <Toggle onClick={()=> setToggleSpeedChange(!toggleSpeedChange)} className={classNames('', toggleSpeedChange ? "active" : "")}/> */}
				<LabelToggle style={{"margin":"8px 0 0 0px"}}>Attributes</LabelToggle>
				<ToggleTools className={classNames('ic-controls', attr ? "active" : "")} onClick={()=> setAttr(!attr)}/>
			</Row>
			<img src={Attributes} width="294" style={{"margin":"5px 0px 18px 15px"}} className={attr ? "none" : ""}/>
		</>
	)
}

export default Video;
