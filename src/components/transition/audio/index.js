import React, { useState } from 'react';
import classNames from 'classnames';
import Slider from 'rc-slider';
import { InputLabel, Input, RcSlider, Row, MiniContainer, Toggle, MiniToggle, LabelToggle, ToggleTools } from '../../app/_inspector-styles';
import AudioTransition from '../../../img/transition/audio-transition.png';
import AudioCrossFade from '../../../img/transition/audio-cross-fade.png';

function TransitionAudio() {

	const [ solid, setSolid ] = useState(false);
	const [ toggleComposite, setToggleComposite ] = useState(false);
	const [ composite, setComposite ] = useState(false);

	return (
		<>
			<Row>
				<LabelToggle style={{"margin":"8px 0 0 0px"}}>Audio Transition</LabelToggle>
				<ToggleTools className={classNames('ic-controls', solid ? "active" : "")} onClick={()=> setSolid(!solid)}/>
			</Row>
			<img src={AudioTransition} width="294" style={{"margin":"5px 0 10px 15px"}} className={solid ? "none" : ""}/>

			{/* COMPOSITE */}
			<Row className="header">
				<Toggle onClick={()=> setToggleComposite(!toggleComposite)} className={classNames('', toggleComposite ? "active" : "")}/>
				<LabelToggle>Cross Fade</LabelToggle>
				<ToggleTools className={classNames('ic-controls', composite ? "active" : "")} onClick={()=> setComposite(!composite)}/>
			</Row>
			<img src={AudioCrossFade} width="294" style={{"margin":"0px 0px 20px 15px"}} className={composite ? "none" : ""}/>
		</>
	)
}

export default TransitionAudio;
