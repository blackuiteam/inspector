import React, { useState } from 'react';
import classNames from 'classnames';
import Slider from 'rc-slider';
import { CheckBox, Tabs, RoundedButton, InputLabel, Input, RcSlider, Row, MiniToggle, MiniContainer, Toggle, LabelToggle, ToggleTools } from '../../app/styles';
import ColorGenerator 	from '../../../img/effects/color-generator.png';
import FaceRefineImg 	from '../../../img/effects/face-refinement.png';
import SkinMaskImg 		from '../../../img/effects/skin-mask.png';
import TextureImg 		from '../../../img/effects/texture.png';

function Effects() {

	// MAIN TAB
	const mainTabs = [
		{ id: 0, label: "Video" },
		{ id: 1, label: "Audio" }
	]

	const [ activeMain, setMainTab ] = useState(0);

	// FACE REFINEMENT
	const [ faceRefine, setFaceRefine ] = useState(false);

	const [ slider1, setSlider1 ] =  useState(50);
	const [ handleSlider1, setHandleSlider1 ] = useState(false);
	function sliderFunc1(value) {
		setHandleSlider1(true);
		setSlider1(value);
	}

	function resetSlider1(value) {
		setHandleSlider1(false);
		setSlider1(50);
	}

	const [ slider2, setSlider2 ] =  useState(50);
	const [ handleSlider2, setHandleSlider2 ] = useState(false);
	function sliderFunc2(value) {
		setHandleSlider2(true);
		setSlider2(value);
	}

	function resetSlider2(value) {
		setHandleSlider2(false);
		setSlider2(50);
	}

	const [ slider3, setSlider3 ] =  useState(50);
	const [ handleSlider3, setHandleSlider3 ] = useState(false);
	function sliderFunc3(value) {
		setHandleSlider3(true);
		setSlider3(value);
	}

	function resetSlider3(value) {
		setHandleSlider3(false);
		setSlider3(50);
	}

	const [ slider4, setSlider4 ] =  useState(50);
	const [ handleSlider4, setHandleSlider4 ] = useState(false);
	function sliderFunc4(value) {
		setHandleSlider4(true);
		setSlider4(value);
	}

	function resetSlider4(value) {
		setHandleSlider4(false);
		setSlider4(50);
	}

	const [ slider5, setSlider5 ] =  useState(50);
	const [ handleSlider5, setHandleSlider5 ] = useState(false);
	function sliderFunc5(value) {
		setHandleSlider5(true);
		setSlider5(value);
	}

	function resetSlider5(value) {
		setHandleSlider5(false);
		setSlider5(50);
	}

	const [ check, setCheck ] = useState(false);
	const [ check1, setCheck1 ] = useState(false);
	const [ check2, setCheck2 ] = useState(false);
	const [ check3, setCheck3 ] = useState(false);

	const skinMaskTabs = [
		{ id: 0, label: "None" },
		{ id: 1, label: "Internal Skin" },
		{ id: 2, label: "Input Alpha" }
	]

	const [ activeSkin, setActiveSkin ] = useState(0);

	const [ faceRefineContent,  setFaceRefineContent ] = useState(false);
	const [ skinMask, setSkinMask ] = useState(false);
	const [ texture, setTexture ] = useState(false);
	const [ eyes, setEyes ] = useState(true);
	const [ colorG, setColorG ] = useState(true);
	const [ lips, setLips ] = useState(true);
	const [ brush, setBrush ] = useState(true);
	const [ forehead, setForehead ] = useState(true);
	const [ cheek, setCheek ] = useState(true);
	const [ toggleColorG, setToggleColorG ] = useState(false);
	const [ colorGenerator, setColorGenerator ] = useState(false);


	return (
		<>
			{/* TABS */}
			<Tabs style={{'margin':'10px 25px 9px 15px'}}>
				{mainTabs.map((tab, i) => (
					<div className={classNames('btn-tab two', i === activeMain ? "active" : "")} onClick={()=> setMainTab(i)}>{tab.label}</div>
				))}
			</Tabs>

			{/* FACE REFINEMENT */}
			<Row className="header">
				<Toggle onClick={()=> setFaceRefine(!faceRefine)} className={faceRefine ? "active" : ""}/>
				<LabelToggle>Face Refinement</LabelToggle>
				<ToggleTools className="ic-delete"/>
				<ToggleTools className={classNames('ic-controls', faceRefineContent ? "active" : "")} onClick={()=> setFaceRefineContent(!faceRefineContent)}/>
			</Row>

			<Row className={classNames('row-slider', faceRefineContent ? "none" : "")} style={{"margin":"1px 0px 9px 0px"}}>
				<InputLabel onDoubleClick={()=>resetSlider1()}>Global blend</InputLabel>
				<RcSlider>
					<Input className="input" type="text" value={slider1} min="0" max="100" onChange={(event) => setSlider1(event.target.value)}/>
					<Slider className={classNames('white', handleSlider1 === true ? 'active': '')} onChange={sliderFunc1} startPoint={100} value={slider1} />
				</RcSlider>
			</Row>

			<Row style={{"margin":"5px 20px 3px 0px"}} className={classNames("mini-row", faceRefineContent ? "none" : "")}/>

			<Row style={{"margin":"0px 0px 2px 0px"}} className={faceRefineContent ? "none" : ""}>
				<RoundedButton style={{"margin":"1px 20px 0px 0px"}}>Analyze</RoundedButton>
				<CheckBox className={check ? "active" : ""} style={{"margin":"4px 0px 0px 0px"}} onClick={()=> setCheck(!check)}>Show Overlay</CheckBox>
			</Row>

			{/* NEEDS STYLES */}
			<MiniContainer className={classNames('first', faceRefineContent ? "none" : "")}>
				<MiniToggle className={classNames('', skinMask ? "active" : "")} onClick={()=> setSkinMask(!skinMask)}>Skin Mask</MiniToggle>

				<div className={skinMask ? "none" : ""}>
				<Row className="mini-title" style={{"height":"21px","padding":"3px 0px 0px 2px"}}>Skin Mask Source</Row>

				<Tabs style={{'margin':'0px 5px 7px -1px'}}>
					{skinMaskTabs.map((tab, i) => (
						<div className={classNames('btn-tab three', i === activeSkin ? "active" : "")} onClick={()=> setActiveSkin(i)}>{tab.label}</div>
					))}
				</Tabs>

				<Row style={{"padding":"0", "height":"25px"}}>
					<CheckBox className={check1 ? "active" : ""} onClick={()=> setCheck1(!check1)}>Use Face Mask</CheckBox>
				</Row>

				<Row className={classNames('row-slider', faceRefineContent ? "none" : "")} style={{"padding":"0", "height":"25px", "margin-bottom": "1px"}}>
					<InputLabel style={{"left":"9px"}} onDoubleClick={()=>resetSlider2()}>Face Mask Size</InputLabel>
					<RcSlider>
						<Input className="input" style={{"right":"4px"}} type="text" value={slider2} min="0" max="100" onChange={(event) => setSlider2(event.target.value)}/>
						<Slider style={{"width":"100%","margin":"0px 0px 0px 0px"}}  className={classNames('white', handleSlider2 === true ? 'active': '')} onChange={sliderFunc2} startPoint={100} value={slider2} />
					</RcSlider>
				</Row>

				<Row className={classNames('row-slider', faceRefineContent ? "none" : "")} style={{"padding":"0", "height":"25px", "margin-bottom": "2px"}}>
					<InputLabel style={{"left":"9px"}} onDoubleClick={()=>resetSlider3()}>Face Mask Softness</InputLabel>
					<RcSlider>
						<Input className="input" style={{"right":"4px"}} type="text" value={slider3} min="0" max="100" onChange={(event) => setSlider3(event.target.value)}/>
						<Slider style={{"width":"100%","margin":"0px 0px 0px 0px"}}  className={classNames('white', handleSlider3 === true ? 'active': '')} onChange={sliderFunc3} startPoint={100} value={slider3} />
					</RcSlider>
				</Row>

				<Row style={{"padding":"0", "height":"25px"}}>
					<CheckBox className={check2 ? "active" : ""} onClick={()=> setCheck2(!check2)}>Adjust Mask</CheckBox>
				</Row>

				<Row className={classNames('row-slider', faceRefineContent ? "none" : "")} style={{"padding":"0", "height":"25px", "margin-bottom": "1px"}}>
					<InputLabel style={{"left":"9px"}} onDoubleClick={()=>resetSlider4()}>Denoise Mask</InputLabel>
					<RcSlider className={classNames('', faceRefineContent ? "none" : "")}>
						<Input className="input" style={{"right":"4px"}} type="text" value={slider4} min="0" max="100" onChange={(event) => setSlider4(event.target.value)}/>
						<Slider style={{"width":"100%","margin":"0px 0px 0px 0px"}}  className={classNames('white', handleSlider4 === true ? 'active': '')} onChange={sliderFunc4} startPoint={100} value={slider4}/>
					</RcSlider>
				</Row>

				<Row className={classNames('row-slider', faceRefineContent ? "none" : "")} style={{"padding":"0", "height":"25px", "margin-bottom": "2px"}}>
					<InputLabel style={{"left":"9px"}} onDoubleClick={()=>resetSlider5()}>Refine Mask</InputLabel>
					<RcSlider>
						<Input className="input" style={{"right":"4px"}} type="text" value={slider5} min="0" max="100" onChange={(event) => setSlider5(event.target.value)}/>
						<Slider style={{"width":"100%","margin":"0px 0px 0px 0px"}}  className={classNames('white', handleSlider5 === true ? 'active': '')} onChange={sliderFunc5} startPoint={100} value={slider5}/>
					</RcSlider>
				</Row>

				<Row style={{"padding":"0", "height":"25px", "margin-bottom": "6px"}}>
					<CheckBox className={check3 ? "active" : ""} onClick={()=> setCheck3(!check3)}>Show Mask</CheckBox>
				</Row>
				</div>
			</MiniContainer>

			<MiniContainer className={classNames('', faceRefineContent ? "none" : "")}>
				<MiniToggle className={classNames('', texture ? "active" : "")} onClick={()=> setTexture(!texture)}>Texture</MiniToggle>
				<img src={TextureImg} width="294px" style={{'margin':'6px 0px 9px 0px'}} className={classNames('', texture ? "none" : "")}/>
			</MiniContainer>

			<MiniContainer className={classNames('', faceRefineContent ? "none" : "")}>
				<MiniToggle className={classNames('', eyes ? "active" : "")} onClick={()=> setEyes(!eyes)}>Eyes</MiniToggle>
			</MiniContainer>

			<MiniContainer className={classNames('', faceRefineContent ? "none" : "")}>
				<MiniToggle className={classNames('', colorG ? "active" : "")} onClick={()=> setColorG(!colorG)}>Color grading</MiniToggle>
			</MiniContainer>

			<MiniContainer className={classNames('', faceRefineContent ? "none" : "")}>
				<MiniToggle className={classNames('', lips ? "active" : "")} onClick={()=> setLips(!lips)}>Lips</MiniToggle>
			</MiniContainer>

			<MiniContainer className={classNames('', faceRefineContent ? "none" : "")}>
				<MiniToggle className={classNames('', brush ? "active" : "")} onClick={()=> setBrush(!brush)}>Brush</MiniToggle>
			</MiniContainer>

			<MiniContainer className={classNames('', faceRefineContent ? "none" : "")}>
				<MiniToggle className={classNames('', forehead ? "active" : "")} onClick={()=> setForehead(!forehead)}>Forehead</MiniToggle>
			</MiniContainer>

			<MiniContainer className={classNames('no-border', faceRefineContent ? "none" : "")} style={{'margin-bottom':'10px'}}>
				<MiniToggle className={classNames('', cheek ? "active" : "")} onClick={()=> setCheek(!cheek)}>Cheek</MiniToggle>
			</MiniContainer>

			{/* COLOR GENERATOR */}
			<Row className="header">
				<Toggle onClick={()=> setToggleColorG(!toggleColorG)} className={classNames('', toggleColorG ? "active" : "")}/>
				<LabelToggle>Color Generator</LabelToggle>
				<ToggleTools className="ic-delete"/>
				<ToggleTools className={classNames('ic-controls', colorGenerator ? "active" : "")} onClick={()=> setColorGenerator(!colorGenerator)}/>
			</Row>
			<img src={ColorGenerator} width="294px" className={classNames('', colorGenerator ? "none" : "")} style={{'margin':'6px 0 19px 15px'}}/>
		</>
	)
}

export default Effects;
