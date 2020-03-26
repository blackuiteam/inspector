import React, { useState } from 'react';
import classNames from 'classnames';
import Slider from 'rc-slider';
import { Tabs, InputLabel, Input, RcSlider, Row, MiniContainer, Toggle, LabelToggle, ToggleTools } from '../../app/styles';
import EmbeddedImg from '../../../img/audio/embedded-content.png';
import Eq1Img from '../../../img/audio/eq-content-01.png';
import Eq2Img from '../../../img/audio/eq-content-02.png';

function Audio() {

	// EMBEDDED
	const [ toggleAudio, setToggleAudio ] = useState(false);
	const [ contentAudio, setContentAudio ] = useState(false);
	const [ slidersAudio, setSlidersAudio] = useState(false);

	const [ slider1, setSlider1 ] =  useState(100);
	const [ handleSlider1, setHandleSlider1 ] = useState(false);
	function sliderFunc1(value) {
		setHandleSlider1(true);
		setSlider1(value);
	}

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

	// AUDIO DUCK
	const [ toggleAudioDuck, setToggleAudioDuck ] = useState(false);
	const tabsAutoDuck1 = [
		{ id: 0, label: 'Dialogue' },
		{ id: 1, label: 'Music' },
		{ id: 2, label: 'Effect' },
	]

	const tabsAutoDuck2 = [
		{ id: 0, label: 'Fast' },
		{ id: 1, label: 'Medium' },
		{ id: 2, label: 'Slow' },
	]

	const [ activeTab1, setTab1 ] = useState(0);
	const [ activeTab2, setTab2 ] = useState(0);

	const [ contentAudioDuck, setContentAudioDuck ] = useState(false);

	const [ slider4, setSlider4 ] =  useState(50);
	const [ handleSlider4, setHandleSlider4 ] = useState(false);
	function sliderFunc4(value) {
		setHandleSlider4(true);
		setSlider4(value);
	}

	const [ slider5, setSlider5 ] =  useState(50);
	const [ handleSlider5, setHandleSlider5 ] = useState(false);
	function sliderFunc5(value) {
		setHandleSlider5(true);
		setSlider5(value);
	}

	// PITCH
	const [ togglePitch, setTogglePitch ] = useState(false);
	const [ contentPitch, setContentPitch ] = useState(false);

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

	// EQUALIZER
	const [ toggleEq, setToggleEq ] = useState(false);
	const [ contentEq, setContentEq ] = useState(false);
	const [ eqSliders, setEqSliders ] = useState(false);

	const [ slider6, setSlider6 ] =  useState(50);
	const [ handleSlider6, setHandleSlider6 ] = useState(false);
	function sliderFunc6(value) {
		setHandleSlider6(true);
		setSlider6(value);
	}


	return (
		<>
			{/* EMBEDDED */}
			<Row>
				<Toggle onClick={()=> setToggleAudio(!toggleAudio)} className={classNames('', toggleAudio ? "active" : "")}/>
				<LabelToggle>Embedded Audio - Stereo</LabelToggle>
				<ToggleTools className={classNames('ic-controls', slidersAudio ? "active" : "")} onClick={()=> setSlidersAudio(!slidersAudio)}/>
				<ToggleTools className={classNames('ic-audio', contentAudio ? "active" : "")} onClick={()=> setContentAudio(!contentAudio)}/>
			</Row>

			<RcSlider style={{"margin":"0px 0px 3px 0px"}} className={slidersAudio ? "none" : ""}>
				<InputLabel>Gain</InputLabel>
				<Input className="input" type="text" value={slider1} min="0" max="100" onChange={(event) => setSlider1(event.target.value)}/>
				<Slider className={classNames('white', handleSlider1 === true ? 'active': '')} onChange={sliderFunc1} startPoint={100} value={slider1} />
			</RcSlider>

			<RcSlider style={{"margin":"0px 0px 10px 0px"}} className={slidersAudio ? "none" : ""}>
				<InputLabel>Pan</InputLabel>
				<Input className="input" type="text" value={slider2} min="0" max="100" onChange={(event) => setSlider2(event.target.value)}/>
				<Slider className={classNames('white', handleSlider2 === true ? 'active': '')} onChange={sliderFunc2} startPoint={50} value={slider2} />
			</RcSlider>

			<RcSlider style={{"margin":"0px 0px 10px 0px"}} className={slidersAudio ? "none" : "none"}>
				<InputLabel>Pitch</InputLabel>
				<Input className="input" type="text" value={slider3} min="0" max="100" onChange={(event) => setSlider3(event.target.value)}/>
				<Slider className={classNames('white', handleSlider3 === true ? 'active': '')} onChange={sliderFunc3} startPoint={50} value={slider3} />
			</RcSlider>

			<img src={EmbeddedImg} width="294" alt="" style={{"margin":"0px 0px 9px 12px"}} className={contentAudio ? "none" : ""}/>

			{/* AUTO DUCK */}
			<Row className="header">
				<Toggle onClick={()=> setToggleAudioDuck(!toggleAudioDuck)} className={classNames('', toggleAudioDuck ? "active" : "")}/>
				<LabelToggle>Auto Duck</LabelToggle>
				<ToggleTools className={classNames('ic-controls', contentAudioDuck ? "active" : "")} onClick={()=> setContentAudioDuck(!contentAudioDuck)}/>
			</Row>

			<div className={contentAudioDuck ? "none" : ""}>
				<Tabs style={{"margin":"4px 24px 6px 15px"}}>
					{tabsAutoDuck1.map((tab, i)=> (
						<div className={classNames('btn-tab three', i === activeTab1 ? "active" : "")} onClick={()=> setTab1(i)}>{tab.label}</div>
					))}
				</Tabs>

				<RcSlider style={{"margin":"0px 0px 3px 0px"}} className={contentAudioDuck ? "none" : ""}>
					<InputLabel>Treshold Sensitivity</InputLabel>
					<Input className="input" type="text" value={slider4} min="0" max="100" onChange={(event) => setSlider4(event.target.value)}/>
					<Slider className={classNames('white', handleSlider4 === true ? 'active': '')} onChange={sliderFunc4} startPoint={50} value={slider4} />
				</RcSlider>

				<RcSlider style={{"margin":"0px 0px 0px 0px"}} className={contentAudioDuck ? "none" : ""}>
					<InputLabel>Amount</InputLabel>
					<Input className="input" type="text" value={slider5} min="0" max="100" onChange={(event) => setSlider5(event.target.value)}/>
					<Slider className={classNames('white', handleSlider5 === true ? 'active': '')} onChange={sliderFunc5} startPoint={50} value={slider5} />
				</RcSlider>

				<Row className="mini-title" style={{"margin":"0px 0px 3px 0px"}}>Reaction Time</Row>

				<Tabs style={{"margin":"0px 24px 9px 15px"}}>
					{tabsAutoDuck2.map((tab, i)=> (
						<div className={classNames('btn-tab three', i === activeTab2 ? "active" : "")} onClick={()=> setTab2(i)}>{tab.label}</div>
					))}
				</Tabs>
			</div>

			{/* PITCH */}
			<Row className="header">
				<Toggle onClick={()=> setTogglePitch(!togglePitch)} className={classNames('', togglePitch ? "active" : "")}/>
				<LabelToggle>Pitch</LabelToggle>
				<ToggleTools className={classNames('ic-controls', contentPitch ? "active" : "")} onClick={()=> setContentPitch(!contentPitch)}/>
			</Row>

			<div className={contentPitch ? "none" : ""}>
				<RcSlider style={{"margin":"1px 0px 3px 0px"}}>
					<InputLabel>Semi Tones</InputLabel>
					<Input className="input" type="text" value={slider7} min="0" max="100" onChange={(event) => setSlider7(event.target.value)}/>
					<Slider className={classNames('white', handleSlider7 === true ? 'active': '')} onChange={sliderFunc7} startPoint={50} value={slider7} />
				</RcSlider>

				<RcSlider style={{"margin":"0px 0px 9px 0px"}}>
					<InputLabel>Cents</InputLabel>
					<Input className="input" type="text" value={slider8} min="0" max="100" onChange={(event) => setSlider8(event.target.value)}/>
					<Slider className={classNames('white', handleSlider8 === true ? 'active': '')} onChange={sliderFunc8} startPoint={50} value={slider8} />
				</RcSlider>
			</div>

			{/* EQUALIZER */}
			<Row className="header">
				<Toggle onClick={()=> setToggleEq(!toggleEq)} className={classNames('', toggleEq ? "active" : "")}/>
				<LabelToggle>Equalizer</LabelToggle>
				<ToggleTools className={classNames('ic-controls', eqSliders ? "active" : "")} onClick={()=> setEqSliders(!eqSliders)}/>
				<ToggleTools className={classNames('ic-eq', contentEq ? "active" : "")} onClick={()=> setContentEq(!contentEq)}/>
			</Row>

			<img src={Eq1Img} width="294" alt="" style={eqSliders ? {"margin":"1px 0px 20px 15px"} : {"margin":"1px 0px 3px 15px"}} className={contentEq ? "none" : ""}/>

			<RcSlider style={{"margin":"0px 0px 6px 0px"}} className={eqSliders ? "none" : ""}>
				<InputLabel>Global Gain</InputLabel>
				<Input className="input" type="text" value={slider6} min="0" max="100" onChange={(event) => setSlider6(event.target.value)}/>
				<Slider className={classNames('white', handleSlider6 === true ? 'active': '')} onChange={sliderFunc6} startPoint={50} value={slider6} />
			</RcSlider>

			<img src={Eq2Img} width="294" alt="" style={{"margin":"0px 0px 20px 15px"}} className={eqSliders ? "none" : ""}/>
		</>
	)
}

export default Audio;
