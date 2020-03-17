import React, { useState } from 'react';
import classNames from 'classnames';
import {Toggle, LabelToggle, ToggleTools } from '../app/styles';
import { Row } from './styles';

function Color() {
	const [ toggleLuts, setLuts ] = useState(false);
	const [ togglePrimaries, setPrimaries ] = useState(false);
	const [ toggleColor, setColor ] = useState(false);

	const [ lutsSlider, setLutsSlider ] = useState(false);

	const [ primariesWheel, setPrimariesWheel ] = useState(false);
	const [ primariesCurves, setPrimariesCurves ] = useState(false);

	const [ colorCurves, setColorCurves ] = useState(false);
	const [ colorSliders, setColorSliders ] = useState(false);

	return (
		<>
			{/* LUTS */}
			<Row>
				<Toggle onClick={()=> setLuts(!toggleLuts)} className={classNames('', toggleLuts ? "active" : "")}/>
				<LabelToggle>LUTs</LabelToggle>
				<ToggleTools className={classNames('ic-controls', lutsSlider ? "active" : "")} onClick={()=> setLutsSlider(!lutsSlider)}/>
			</Row>

			<Row className={classNames('luts', lutsSlider ? "none" : "")}/>
			<Row className={classNames('slider', lutsSlider ? "none" : "")}/>

			{/* PRIMARIES */}
			<Row className={classNames('', lutsSlider ? "header" : "")}>
				<Toggle onClick={()=> setPrimaries(!togglePrimaries)} className={classNames('', togglePrimaries ? "active" : "")}/>
				<LabelToggle>Primaries</LabelToggle>
				<ToggleTools className={classNames('ic-controls', primariesCurves ? "active" : "")} onClick={()=> setPrimariesCurves(!primariesCurves)}/>
				<ToggleTools className={classNames('ic-colorwheel', primariesWheel ? "active" : "")} onClick={()=> setPrimariesWheel(!primariesWheel)}/>
				<ToggleTools className="ic-auto"/>
			</Row>

			<Row className={classNames('primaries-wheels', primariesWheel ? "none" : "")}/>
			<Row className={classNames('primaries-curves', primariesCurves ? "none" : "")}/>

			{/* COLOR */}
			<Row className="header">
				<Toggle onClick={()=> setColor(!toggleColor)} className={classNames('', toggleColor ? "active" : "")}/>
				<LabelToggle>Color</LabelToggle>
				<ToggleTools className={classNames('ic-controls', colorSliders ? "active" : "")} onClick={()=> setColorSliders(!colorSliders)}/>
				<ToggleTools className={classNames('ic-curves', colorCurves ? "active" : "")} onClick={()=> setColorCurves(!colorCurves)}/>
			</Row>

			<Row className={classNames('color-curves', colorCurves ? "none" : "")}/>
			<Row className={classNames('color-sliders', colorSliders ? "none" : "")}/>
		</>
	)
}

export default Color;
