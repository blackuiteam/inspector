import React, { useState } from 'react';
import classNames from 'classnames';
import Slider from 'rc-slider';
import { Tabs, InputLabel, Input, RcSlider, Row, MiniContainer, Toggle, MiniToggle, LabelToggle, ToggleTools } from '../../app/styles';
import Transform1 from '../../../img/sizing/transform-01.png';
import Transform2 from '../../../img/sizing/transform-02.png';
import CroppingContent from '../../../img/sizing/cropping-content.png';
import CroppingContent2 from '../../../img/sizing/cropping-content-02.png';
import CroppingContent3 from '../../../img/sizing/cropping-content-03.png';
import Scalling from '../../../img/sizing/scalling.png';

function Sizing() {

	const scallingTabs1 = [
		{ id: 0, label: 'Project' },
		{ id: 1, label: 'Crop' },
		{ id: 2, label: 'Fit' },
		{ id: 3, label: 'Fill' },
		{ id: 4, label: 'Stretch' },
	]

	const scallingTabs2 = [
		{ id: 0, label: 'None' },
		{ id: 1, label: '2x' },
		{ id: 2, label: '3x' },
		{ id: 3, label: '4x' }
	]

	const [ activeTab1, setTab1 ] = useState(0);
	const [ activeTab2, setTab2 ] = useState(0);

	const [ toggleTransform, setToggleTransform ] = useState(false);
	const [ toggleCropping, setToggleCropping ] = useState(false);
	const [ toggleScalling, setToggleScalling ] = useState(false);

	const [ transformContent, setTransformContent ] = useState(false);
	const [ transformSliders, setTransformSlider ] = useState(false);

	const [ croppingContent, setCroppingContent ] = useState(false);
	const [ croppingSliders, setCroppingSliders ] = useState(false);

	const [ scallingContent, setScallingContent ] = useState(false);

	const [ slider, setSlider ] =  useState(20);
	function sliderFunc(value) { setSlider(value); }

	const [ slider2, setSlider2 ] =  useState(80);
	function sliderFunc2(value) { setSlider2(value); }

	const [ slider3, setSlider3 ] =  useState(20);
	function sliderFunc3(value) { setSlider3(value); }

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

	return (
		<>
			{/* TRANSFORM */}
			<Row>
				<Toggle onClick={()=> setToggleTransform(!toggleTransform)} className={classNames('', toggleTransform ? "active" : "")}/>
				<LabelToggle>Transform</LabelToggle>
				<ToggleTools className={classNames('ic-controls', transformSliders ? "active" : "")} onClick={()=> setTransformSlider(!transformSliders)}/>
				<ToggleTools className={classNames('ic-transform', transformContent ? "active" : "")} onClick={()=> setTransformContent(!transformContent)}/>
			</Row>
			<img src={Transform1} width="296" alt="" style={{"margin":"-1px 0px 12px 15px"}} className={transformContent ? "none" : ""}/>
			<img src={Transform2} width="294" alt="" style={{"margin":"0px 0px 9px 15px"}} className={transformSliders ? "none" : ""}/>

			<RcSlider style={{"margin":"0px 0px 3px 0px"}} className={transformSliders ? "none" : "none"}>
				<InputLabel>Pitch</InputLabel>
				<Input className="input" type="text" value={slider+'.00'} min="0" max="100" onChange={(event) => setSlider(event.target.value)}/>
				<Slider onChange={sliderFunc} startPoint={50} value={slider} />
			</RcSlider>

			<RcSlider style={{"margin":"0px 0px 9px 0px"}} className={transformSliders ? "none" : "none"}>
				<InputLabel>Yaw</InputLabel>
				<Input className="input" type="text" value={slider2+'.00'} min="0" max="100" onChange={(event) => setSlider2(event.target.value)}/>
				<Slider onChange={sliderFunc2} startPoint={50} value={slider2} />
			</RcSlider>

			{/* CROPPING */}
			<Row className="header">
				<Toggle onClick={()=> setToggleCropping(!toggleCropping)} className={classNames('', toggleCropping ? "active" : "")}/>
				<LabelToggle>Cropping</LabelToggle>
				<ToggleTools className={classNames('ic-controls', croppingSliders ? "active" : "")} onClick={()=> setCroppingSliders(!croppingSliders)}/>
				<ToggleTools className={classNames('ic-crop', croppingContent ? "active" : "")} onClick={()=> setCroppingContent(!croppingContent)}/>
			</Row>
			<img src={CroppingContent} width="296" alt="" style={{"margin":"0px 0px 14px 15px"}} className={croppingContent ? "none" : ""}/>

			<img src={CroppingContent2} width="294" alt="" style={{"margin":"0px 0px 0px 15px"}} className={croppingSliders ? "none" : ""}/>
			<RcSlider style={{"margin":"3px 0px 6px 0px"}} className={croppingSliders ? "none" : ""}>
				<InputLabel>Softness</InputLabel>
				<Input className="input" type="text" value={slider3} min="0" max="100" onChange={(event) => setSlider3(event.target.value)}/>
				<Slider onChange={sliderFunc3} startPoint={50} value={slider3} />
			</RcSlider>
			<img src={CroppingContent3} width="294" alt="" style={{"margin":"0px 0px 9px 15px"}} className={croppingSliders ? "none" : ""}/>

			{/* SCALING */}
			<Row className="header">
				<Toggle onClick={()=> setToggleScalling(!toggleScalling)} className={classNames('', toggleScalling ? "active" : "")}/>
				<LabelToggle>Scalling</LabelToggle>
				<ToggleTools className={classNames('ic-controls', scallingContent ? "active" : "")} onClick={()=> setScallingContent(!scallingContent)}/>
			</Row>

			<div className={scallingContent ? "none" : ""}>
				<Tabs style={{"margin-top":"1px"}}>
					{scallingTabs1.map((item, i) => (
						<div className={classNames('btn-tab five', i === activeTab1 ? "active" : "")} onClick={()=> setTab1(i)}>{item.label}</div>
					))}
				</Tabs>

				<img src={Scalling} width="294" style={{"margin":"9px 0px 4px 15px"}} alt=""/>

				<Tabs>
					{scallingTabs2.map((item, i) => (
						<div className={classNames('btn-tab four', i === activeTab2 ? "active" : "")} onClick={()=> setTab2(i)}>{item.label}</div>
					))}
				</Tabs>

				<RcSlider style={{"margin":"3px 0px 3px 0px"}} className={classNames("", activeTab2 === 0 ? "opacity" : "", transformSliders ? "none" : "")}>
					<InputLabel>Sharpness</InputLabel>
					<Input className="input" type="text" value={slider4} min="0" max="100" onChange={(event) => setSlider4(event.target.value)}/>
					<Slider className={classNames('white', handleSlider4 === true ? 'active': '')} onChange={sliderFunc4} startPoint={50} value={slider4} />
				</RcSlider>

				<RcSlider style={{"margin":"3px 0px 18px 0px"}} className={classNames("", activeTab2 === 0 ? "opacity" : "", transformSliders ? "none" : "")}>
					<InputLabel>Noise Reduction</InputLabel>
					<Input className="input" type="text" value={slider5} min="0" max="100" onChange={(event) => setSlider5(event.target.value)}/>
					<Slider className={classNames('white', handleSlider5 === true ? 'active': '')} onChange={sliderFunc5} startPoint={50} value={slider5} />
				</RcSlider>
			</div>
		</>
	)
}

export default Sizing;
