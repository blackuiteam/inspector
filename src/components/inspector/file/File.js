import React, { useState } from 'react';
import classNames from 'classnames';
import { Row, MiniContainer, MiniToggle, LabelToggle, ToggleTools } from '../../app/_inspector-styles';

import InfoImg 				from '../../../img/file/info.png';
import BmdCameraRawImg 		from '../../../img/file/bmd-camera-raw.png';
import ClipImg 				from '../../../img/file/clip.png';
import WhitheBalanceImg  	from '../../../img/file/white-balance.png';
import GammaControlsImg 	from '../../../img/file/gamma-controls.png';

import CamRaw1 		from '../../../img/file/bmd-camera-raw-01.png';
import CamRaw2 		from '../../../img/file/bmd-camera-raw-02.png';
import CamRaw3 		from '../../../img/file/bmd-camera-raw-03.png';

function File() {

	const [ clip, setClip ] = useState(false);
	const [ whiteBalance, setWhiteBalance ] = useState(false);
	const [ gamma, setGamma ] = useState(false);
	const [ cameraRaw, setCameraRaw ] = useState(false);
	const [ camColor, setCamColor ] = useState(false);

	return (
		<>
			<img src={InfoImg} width="294" style={{'margin': '13px 0 9px 15px'}}/>

			<Row className="header">
				<LabelToggle style={{"margin":"6px 0 0 0px"}}>Clip</LabelToggle>
				<ToggleTools className={classNames('ic-controls', clip ? "active" : "")} onClick={()=> setClip(!clip)}/>
			</Row>
			<img src={ClipImg} width="294" style={{'margin': '6px 0 9px 15px'}} className={classNames('', clip ? "none" : "")}/>

			<Row className="header">
				<LabelToggle style={{"margin":"6px 0 0 0px"}}>Blackmagic Camera Raw</LabelToggle>
				<ToggleTools className={classNames('ic-controls', cameraRaw ? "active" : "")} onClick={()=> setCameraRaw(!cameraRaw)}/>
				<ToggleTools className={classNames('ic-col-science', camColor ? "active" : "")} onClick={()=> setCamColor(!camColor)}/>
			</Row>
			<img src={CamRaw1} width="294" style={{'margin': '6px 0 11px 15px'}} className={cameraRaw ? "none" : ''}/>
			<img src={CamRaw2} width="294" style={cameraRaw ? {"margin":"0px 0px 19px 15px"} : {'margin': '0px 0 8px 15px'}} className={camColor ? "none" : ''}/>
			<img src={CamRaw3} width="294" style={{'margin': '0px 0 13px 15px'}} className={cameraRaw ? "none" : ''}/>

			<MiniContainer className={classNames('first', cameraRaw ? "none" : '')}>
				<MiniToggle onClick={()=> setWhiteBalance(!whiteBalance)} className={classNames('', whiteBalance ? "active" : "")}>White Balance</MiniToggle>
				<img src={WhitheBalanceImg} width="294" style={{'margin': '1px 0px 9px -1px'}} className={classNames('', whiteBalance ? "none" : "")}/>
			</MiniContainer>

			<MiniContainer className={classNames('no-border', cameraRaw ? "none" : '')}>
				<MiniToggle onClick={()=> setGamma(!gamma)} className={classNames('', gamma ? "active" : "")}>Gamma Controls</MiniToggle>
				<img src={GammaControlsImg} width="294" style={{'margin': '6px 0 19px -1px'}} className={classNames('', gamma ? "none" : "")}/>
			</MiniContainer>
		</>
	)
}

export default File;
