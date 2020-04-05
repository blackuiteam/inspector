import React, { useState } from 'react';
import classNames from 'classnames';
import Slider from 'rc-slider';
import { InputLabel, Input, RcSlider, Row, MiniContainer, Toggle, MiniToggle, LabelToggle, ToggleTools } from '../../app/_inspector-styles';
import DropdownNormal from '../../../img/dropdown/dropdown-normal.png';
import Attributes from '../../../img/generator/video/video-solid-color.png';

function GeneratorVideo() {

	const [ solid, setSolid ] = useState(false);
	const [ toggleComposite, setToggleComposite ] = useState(false);
	const [ composite, setComposite ] = useState(false);

	const [ slider, setSlider ] =  useState(50);
	const [ handleSlider, setHandleSlider ] = useState(false);
	function sliderFunc(value) {
		setHandleSlider(true);
		setSlider(value);
	}

	return (
		<>
			<Row>
				<LabelToggle style={{"margin":"8px 0 0 0px"}}>Solid Color</LabelToggle>
				<ToggleTools className={classNames('ic-controls', solid ? "active" : "")} onClick={()=> setSolid(!solid)}/>
			</Row>
			<img src={Attributes} width="294" style={{"margin":"5px 0 8px 15px"}} className={solid ? "none" : ""}/>

			{/* COMPOSITE */}
			<Row className="header">
				<Toggle onClick={()=> setToggleComposite(!toggleComposite)} className={classNames('', toggleComposite ? "active" : "")}/>
				<LabelToggle>Composite</LabelToggle>
				<ToggleTools className={classNames('ic-controls', composite ? "active" : "")} onClick={()=> setComposite(!composite)}/>
			</Row>
			<img src={DropdownNormal} width="294" style={{"margin":"0px 0px 3px 15px"}} className={composite ? "none" : ""}/>

			<RcSlider style={{"margin":"0px 0px 15px 0px"}} className={composite ? "none" : ""}>
				<InputLabel>Opacity</InputLabel>
				<Input className="input" type="text" value={slider} min="0" max="100" onChange={(event) => setSlider(event.target.value)}/>
				<Slider onChange={sliderFunc} startPoint={100} value={slider} />
			</RcSlider>
		</>
	)
}

export default GeneratorVideo;
