import React, { useState } from 'react';
import classNames from 'classnames';
import { Row, MiniContainer, MiniToggle, LabelToggle, ToggleTools } from '../app/styles';

import InfoImg 				from '../../img/file/info.png';
import BmdCameraRawImg 		from '../../img/file/bmd-camera-raw.png';
import ClipImg 				from '../../img/file/clip.png';
import WhitheBalanceImg  	from '../../img/file/white-balance.png';
import GammaControlsImg 	from '../../img/file/gamma-controls.png';

function File() {

	const [ clip, setClip ] = useState(false);
	const [ whiteBalance, setWhiteBalance ] = useState(false);
	const [ gamma, setGamma ] = useState(false);

	return (
		<>
			<img src={InfoImg} width="263" style={{'margin': '11px auto'}}/>

			<Row className="header">
				<LabelToggle>Clip</LabelToggle>
				<ToggleTools className={classNames('ic-controls', clip ? "active" : "")} onClick={()=> setClip(!clip)}/>
			</Row>
			<img src={ClipImg} width="294" style={{'margin': '6px auto 9px auto'}} className={classNames('', clip ? "none" : "")}/>

			<Row className="header">
				<LabelToggle>Blackmagic Camera Raw</LabelToggle>
			</Row>
			<img src={BmdCameraRawImg} width="294" style={{'margin': '6px auto 13px auto'}}/>

			<MiniContainer className="first">
				<MiniToggle onClick={()=> setWhiteBalance(!whiteBalance)} className={classNames('', whiteBalance ? "active" : "")}>White Balance</MiniToggle>
				<img src={WhitheBalanceImg} width="294" style={{'margin': '1px auto 10px auto'}} className={classNames('', whiteBalance ? "none" : "")}/>
			</MiniContainer>

			<MiniContainer className="no-border">
				<MiniToggle onClick={()=> setGamma(!gamma)} className={classNames('', gamma ? "active" : "")}>Gamma Controls</MiniToggle>
				<img src={GammaControlsImg} width="294" style={{'margin': '4px auto 20px auto'}} className={classNames('', gamma ? "none" : "")}/>
			</MiniContainer>
		</>
	)
}

export default File;
