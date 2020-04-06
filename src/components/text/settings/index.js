import React, { useState } from 'react';
import classNames from 'classnames';
import { Row, LabelToggle, ToggleTools, Toggle } from '../../app/_inspector-styles';

import ImageImg from '../../../img/text/settings/image.png';
import SourceColorSpaceImg from '../../../img/text/settings/source-color-space.png';
import SourceGammaSpaceImg from '../../../img/text/settings/source-gamma-space.png';
import SettingsImg from '../../../img/text/settings/settings.png';
import TextFieldImg from '../../../img/text/settings/text-field.png';

function TextSettings() {

	const [ toggleImage, setToggleImage ] = useState(false);
	const [ imageContent, setImage ] = useState(false);

	const [ toggleSrcColorSpace, setToggleSrcColorSpace ] = useState(false);
	const [ srcColorSpaceContent, setSrcColorSpace ] = useState(false);

	const [ toggleSrcGammaSpace, setToggleSrcGammaSpace ] = useState(false);
	const [ srcGammaSpaceContent, setSrcGammaSpace ] = useState(false);

	const [ toggleSettings, setToggleSettings ] = useState(false);
	const [ settingsContent, setSettings ] = useState(false);

	const [ toggleComments, setToggleComments ] = useState(false);
	const [ commentsContent, setComments ] = useState(false);

	const [ toggleFrame, setToggleFrame ] = useState(false);
	const [ frameContent, setFrame ] = useState(false);

	const [ toggleStart, setToggleStart ] = useState(false);
	const [ startContent, setStart ] = useState(false);

	const [ toggleEnd, setToggleEnd ] = useState(false);
	const [ endContent, setEnd ] = useState(false);

	return (
		<>
			<Row>
				{/* <Toggle onClick={()=> setToggleImage(!toggleImage)} className={classNames('', toggleImage ? "active" : "")}/> */}
				<LabelToggle style={{"margin":"8px 0 0 0px"}}>Image</LabelToggle>
				<ToggleTools onClick={()=> setImage(!imageContent)} className={classNames('ic-controls', imageContent ? "active" : "")}/>
				<ToggleTools className={classNames('ic-kf')}/>
			</Row>
			<img  src={ImageImg} width="294" style={{'margin': '3px auto 11px 15px'}} className={classNames('', imageContent ? "none" : "")}/>

			<Row className="header">
				<Toggle onClick={()=> setToggleSrcColorSpace(!toggleSrcColorSpace)} className={classNames('', toggleSrcColorSpace ? "active" : "")}/>
				<LabelToggle>Source Color Space</LabelToggle>
				<ToggleTools onClick={()=> setSrcColorSpace(!srcColorSpaceContent)} className={classNames('ic-controls', srcColorSpaceContent ? "active" : "")}/>
				<ToggleTools className={classNames('ic-kf')}/>
			</Row>
			<img  src={SourceColorSpaceImg} width="294" style={{'margin': '5px auto 10px 15px'}} className={classNames('', srcColorSpaceContent ? "none" : "")}/>

			<Row className="header">
				<Toggle onClick={()=> setToggleSrcGammaSpace(!toggleSrcGammaSpace)} className={classNames('', toggleSrcGammaSpace ? "active" : "")}/>
				<LabelToggle>Source Gamma Space</LabelToggle>
				<ToggleTools onClick={()=> setSrcGammaSpace(!srcGammaSpaceContent)} className={classNames('ic-controls', srcGammaSpaceContent ? "active" : "")}/>
				<ToggleTools className={classNames('ic-kf')}/>
			</Row>
			<img  src={SourceGammaSpaceImg} width="294" style={{'margin': '7px auto 12px 15px'}} className={classNames('', srcGammaSpaceContent ? "none" : "")}/>

			<Row className="header">
				<Toggle onClick={()=> setToggleSettings(!toggleSettings)} className={classNames('', toggleSettings ? "active" : "")}/>
				<LabelToggle>Settings</LabelToggle>
				<ToggleTools onClick={()=> setSettings(!settingsContent)} className={classNames('ic-controls', settingsContent ? "active" : "")}/>
				<ToggleTools className={classNames('ic-kf')}/>
			</Row>
			<img  src={SettingsImg} width="310" style={{'margin': '5px auto 12px 15px'}} className={classNames('', settingsContent ? "none" : "")}/>

			<Row className="header">
				<Toggle onClick={()=> setToggleComments(!toggleComments)} className={classNames('', toggleComments ? "active" : "")}/>
				<LabelToggle>Comments</LabelToggle>
				<ToggleTools onClick={()=> setComments(!commentsContent)} className={classNames('ic-controls', commentsContent ? "active" : "")}/>
			</Row>
			<img  src={TextFieldImg} width="294" style={{'margin': '2px auto 8px 15px'}} className={classNames('', commentsContent ? "none" : "")}/>

			<Row className="header">
				<Toggle onClick={()=> setToggleFrame(!toggleFrame)} className={classNames('', toggleFrame ? "active" : "")}/>
				<LabelToggle>Frame Render Script</LabelToggle>
				<ToggleTools onClick={()=> setFrame(!frameContent)} className={classNames('ic-controls', frameContent ? "active" : "")}/>
			</Row>
			<img  src={TextFieldImg} width="294" style={{'margin': '2px auto 8px 15px'}} className={classNames('', frameContent ? "none" : "")}/>

			<Row className="header">
				<Toggle onClick={()=> setToggleStart(!toggleStart)} className={classNames('', toggleStart ? "active" : "")}/>
				<LabelToggle>Start Render Script</LabelToggle>
				<ToggleTools onClick={()=> setStart(!startContent)} className={classNames('ic-controls', startContent ? "active" : "")}/>
			</Row>
			<img  src={TextFieldImg} width="294" style={{'margin': '2px auto 8px 15px'}} className={classNames('', startContent ? "none" : "")}/>

			<Row className="header">
				<Toggle onClick={()=> setToggleEnd(!toggleEnd)} className={classNames('', toggleEnd ? "active" : "")}/>
				<LabelToggle>End Render Script</LabelToggle>
				<ToggleTools onClick={()=> setEnd(!endContent)} className={classNames('ic-controls', endContent ? "active" : "")}/>
			</Row>
			<img  src={TextFieldImg} width="294" style={{'margin': '2px auto 18px 15px'}} className={classNames('', endContent ? "none" : "")}/>
		</>
	)
}

export default TextSettings;
