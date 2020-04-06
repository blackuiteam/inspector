import React, { useState } from 'react';
import Slider from 'rc-slider';
import classNames from 'classnames';
import { mSlider, RoundedButton, InputLabel, Input, RcSlider, Row, MiniContainer, Toggle, MiniToggle, LabelToggle, ToggleTools } from '../../app/_inspector-styles';
import kf1img from '../../../img/video/kf1.png';
import kf2img from '../../../img/video/kf2.png';
import DropdownNormal from '../../../img/dropdown/dropdown-normal.png';
import DropdownPerspective from '../../../img/dropdown/dropdown-perspective-group.png';
import SpeedChange1 from '../../../img/video/speed-change-01.png';
import SpeedChange2 from '../../../img/video/speed-change-02.png';
import LensCorrection from '../../../img/video/lens-correction.png';
import Attributes from '../../../img/video/attributes.png';
import Dynamic1 from '../../../img/video/dynamic-zoom-01.png';
import Dynamic2 from '../../../img/video/dynamic-zoom-02.png';

function Video() {

	const [ toggleComposite, setToggleComposite ] = useState(false);
	const [ composite, setComposite ] = useState(false);

	const [ toggleKf1, setToggleKf1 ] = useState(false);

	const [ toggleDynamic, setToggleDynamic ] = useState(false);
	const [ dynamic1, setDynamic1 ] = useState(false);
	const [ dynamic2, setDynamic2 ] = useState(false);

	const [ toggleStablization, setToggleStablization ] = useState(false);
	const [ stablization, setStablization ] = useState(false);

	const [ toggleSpeedChange, setToggleSpeedChange ] = useState(false);
	const [ speedChange1, setSpeedChange1] = useState(false);
	const [ speedChange2, setSpeedChange2] = useState(false);

	const [ toggleLens, setToggleLens ] = useState(false);
	const [ toggleKf2, setToggleKf2 ] = useState(false);
	const [ lens, setLens] = useState(false);

	const [ attr, setAttr] = useState(false);

	const [ slider, setSlider ] =  useState(50);
	const [ handleSlider, setHandleSlider ] = useState(true);
	const [sld, setSld ] = useState(false);
	function sliderFunc(value) 	{ setHandleSlider(true); setSlider(value); }
	function resetSlider(value) { setHandleSlider(false); setSlider(100); }

	const [ slider1, setSlider1 ] =  useState(50);
	const [ handleSlider1, setHandleSlider1 ] = useState(false);
	const [sld1, setSld1 ] = useState(false);
	function sliderFunc1(value) { setHandleSlider1(true); setSlider1(value); }
	function resetSlider1(value) { setHandleSlider1(false); setSlider1(50); }

	const [ slider2, setSlider2 ] =  useState(80);
	const [ handleSlider2, setHandleSlider2 ] = useState(false);
	const [sld2, setSld2 ] = useState(false);
	function sliderFunc2(value) { setHandleSlider2(true); setSlider2(value); }
	function resetSlider2(value) { setHandleSlider2(false); setSlider2(80); }

	const [ slider3, setSlider3 ] =  useState(80);
	const [ handleSlider3, setHandleSlider3 ] = useState(true);
	const [sld3, setSld3 ] = useState(false);
	function sliderFunc3(value) { setHandleSlider3(true); setSlider3(value); }
	function resetSlider3(value) { setHandleSlider3(false); setSlider3(100); }

	const [ slider4, setSlider4 ] =  useState(40);
	const [ handleSlider4, setHandleSlider4 ] = useState(false);
	const [sld4, setSld4 ] = useState(false);
	function sliderFunc4(value) { setHandleSlider4(true); setSlider4(value); }
	function resetSlider4(value) { setHandleSlider4(false); setSlider4(40); }

	const [ test, setTest ] = useState(false);

	function testing(value) {
		setTest(!test);
		console.log(test);
	}


	return (
		<>
			{/* COMPOSITE */}
			<Row>
				<Toggle onClick={()=> setToggleComposite(!toggleComposite)} className={classNames('', toggleComposite ? "active" : "")}/>
				<LabelToggle>Composite</LabelToggle>
				<ToggleTools className={classNames('ic-controls', composite ? "active" : "")} onClick={()=> setComposite(!composite)}/>
				<ToggleTools className={classNames('ic-kf', toggleKf1 ? "active" : "")} onClick={()=> setToggleKf1(!toggleKf1)}/>
			</Row>
			<img src={kf1img} width="296" style={{"margin":"-2px 0px 9px 14px"}} className={toggleKf1 ? "" : "none"}/>
			<img src={DropdownNormal} width="294" style={{"margin":"0px 0px 3px 15px"}} className={composite ? "none" : ""}/>

			<Row className={classNames("row-slider", composite ? "none" : "")} style={{"marginBottom": "9px"}}>
				<InputLabel className={sld ? "active" : ""} onDoubleClick={()=>resetSlider()}>Opacity</InputLabel>
				<RcSlider>
					<Input className={classNames("input")} type="text" value={slider} min="0" max="100" onChange={(event) => setSlider(event.target.value)}/>
					<Slider
						className={classNames('default', handleSlider === true ? 'active': '')}
						onChange={sliderFunc}
						onBeforeChange={()=>setSld(!sld)}
						onAfterChange={()=>setSld(!sld)}
						startPoint={0}
						value={slider}/>
				</RcSlider>
			</Row>

			{/* DYNAMIC ZOOM */}
			<Row className="header">
				<Toggle onClick={()=> setToggleDynamic(!toggleDynamic)} className={classNames('', toggleDynamic ? "active" : "")}/>
				<LabelToggle>Dynamic Zoom</LabelToggle>
				<ToggleTools className={classNames('ic-controls', dynamic2 ? "active" : "")} onClick={()=> setDynamic2(!dynamic2)}/>
				<ToggleTools className={classNames('ic-dynamic', dynamic1 ? "active" : "")} onClick={()=> setDynamic1(!dynamic1)}/>
			</Row>
			<img src={Dynamic1} width="296" style={{"margin":"0px 0px 9px 14px"}} className={dynamic1 ? "none" : ""}/>
			<img src={Dynamic2} width="294" style={{"margin":"0px 0px 9px 15px"}} className={dynamic2 ? "none" : ""}/>

			{/* STABLIZATION */}
			<Row className="header">
				<Toggle onClick={()=> setToggleStablization(!toggleStablization)} className={classNames('', toggleStablization ? "active" : "")}/>
				<LabelToggle>Stablization</LabelToggle>
				<ToggleTools className={classNames('ic-controls', stablization ? "active" : "")} onClick={()=> setStablization(!stablization)}/>
			</Row>

			<div className={stablization ? "none" : ""}>
				<img src={DropdownPerspective} width="294" style={{"margin":"1px 0px 3px 15px"}} className={stablization ? "none" : ""}/>

				<Row className={classNames("row-slider")} style={{"marginBottom": "3px"}}>
					<InputLabel className={sld1 ? "active" : ""} onDoubleClick={()=>resetSlider1()}>Cropping Ratio</InputLabel>
					<RcSlider>
						<Input className="input" type="text" value={slider1} min="0" max="100" onChange={(event) => setSlider1(event.target.value)}/>
						<Slider
							className={classNames('white', handleSlider1 === true ? 'active': '')}
							onChange={sliderFunc1}
							onBeforeChange={()=>setSld1(!sld1)}
							onAfterChange={()=>setSld1(!sld1)}
							startPoint={50} value={slider1} />
					</RcSlider>
				</Row>

				<Row className={classNames("row-slider")} style={{"marginBottom": "3px"}}>
					<InputLabel className={sld2 ? "active" : ""} onDoubleClick={()=>resetSlider2()}>Smooth</InputLabel>
					<RcSlider>
						<Input className="input" type="text" value={slider2} min="0" max="100" onChange={(event) => setSlider2(event.target.value)}/>
						<Slider
							className={classNames('white', handleSlider2 === true ? 'active': '')}
							onChange={sliderFunc2}
							onBeforeChange={()=>setSld2(!sld2)}
							onAfterChange={()=>setSld2(!sld2)}
							startPoint={30}
							value={slider2} />
					</RcSlider>
				</Row>

				<Row className={classNames("row-slider")} style={{"marginBottom": "12px"}}>
					<InputLabel className={sld3 ? "active" : ""} onDoubleClick={()=> resetSlider3()}>Strengh</InputLabel>
					<RcSlider>
						<Input className="input" type="text" value={slider3} min="0" max="100" onChange={(event) => setSlider3(event.target.value)}/>
						<Slider
							className={classNames('default', handleSlider3 === true ? 'active': '')}
							onChange={sliderFunc3}
							onBeforeChange={()=>setSld3(!sld3)}
							onAfterChange={()=>setSld3(!sld3)}
							startPoint={0}
							value={slider3} />
					</RcSlider>
				</Row>

				<Row>
					<RoundedButton>Stablize</RoundedButton>
				</Row>
			</div>

			{/* SPEED CHANGE */}
			<Row className="header">
				<Toggle onClick={()=> setToggleSpeedChange(!toggleSpeedChange)} className={classNames('', toggleSpeedChange ? "active" : "")}/>
				<LabelToggle>Speed Change</LabelToggle>
				<ToggleTools className={classNames('ic-controls', speedChange1 ? "active" : "")} onClick={()=> setSpeedChange1(!speedChange1)}/>
				<ToggleTools className={classNames('ic-speed', speedChange2 ? "active" : "")} onClick={()=> setSpeedChange2(!speedChange2)}/>
			</Row>
			<img src={SpeedChange1} width="294" style={{"margin":"6px 0px 10px 15px"}} className={speedChange1 ? "none" : ""}/>
			<img src={SpeedChange2} width="296" style={{"margin":"6px 0px 9px 14px"}} className={speedChange2 ? "none" : ""}/>

			{/* LENS CORRECTION */}
			<Row className="header">
				<Toggle onClick={()=> setToggleLens(!toggleLens)} className={classNames('', toggleLens ? "active" : "")}/>
				<LabelToggle>Lens Correction</LabelToggle>
				<ToggleTools className={classNames('ic-controls', lens ? "active" : "")} onClick={()=> setLens(!lens)}/>
				<ToggleTools className={classNames('ic-kf', toggleKf2 ? "active" : "")} onClick={()=> setToggleKf2(!toggleKf2)}/>
			</Row>

			<img src={kf2img} width="296" style={{"margin":"0px 0px 14px 14px"}} className={toggleKf2 ? "" : "none"}/>
			<div className={lens ? "none" : ""}>
				<img src={LensCorrection} width="294" style={{"margin":"6px 0px 6px 15px"}}/>

				<Row className={classNames("row-slider")} style={{"marginBottom": "12px"}}>
					<InputLabel className={sld4 ? "active" : ""} onDoubleClick={()=>resetSlider4()}>Distortion</InputLabel>
					<RcSlider>
						<Input className="input" type="text" value={slider4} min="0" max="100" onChange={(event) => setSlider4(event.target.value)}/>
						<Slider className={classNames('white', handleSlider4 === true ? 'active': '')} onChange={sliderFunc4} onBeforeChange={()=>setSld4(!sld4)} onAfterChange={()=>setSld4(!sld4)} startPoint={40} value={slider4} />
					</RcSlider>
				</Row>

				<Row>
					<RoundedButton>Analyze</RoundedButton>
				</Row>
			</div>

			{/* ATTRIBUTES */}
			<Row className="header">
				<LabelToggle style={{"margin":"6px 0 0 1px"}}>Attributes</LabelToggle>
				<ToggleTools className={classNames('ic-controls', attr ? "active" : "")} onClick={()=> setAttr(!attr)}/>
			</Row>
			<img src={Attributes} width="294" style={{"margin":"4px 0px 19px 15px"}} className={attr ? "none" : ""}/>
		</>
	)
}

export default Video;
