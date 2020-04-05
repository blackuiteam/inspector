import React, { useState } from 'react';
import classNames from 'classnames';
import { MiniContainer, MiniToggle, Row, LabelToggle, ToggleTools, Toggle } from '../../app/_inspector-styles';

import ShadingImg from '../../../img/text/style/shading-element.png';
import PropertiesImg from '../../../img/text/style/properties.png';
import SoftnessImg from '../../../img/text/style/softness.png';
import PositionImg from '../../../img/text/style/position.png';
import RotationImg from '../../../img/text/style/rotation.png';
import ShearImg from '../../../img/text/style/shear.png';
import SizeImg from '../../../img/text/style/size.png';

function TextStyle() {

	const [ toggleShading, setToggleShading ] = useState(false);
	const [ toggleSoftness, setToggleSoftness ] = useState(false);
	const [ togglePosition, setTogglePosition ] = useState(false);
	const [ toggleRotation, setToggleRotation ] = useState(false);
	const [ toggleShear, setToggleShear ] = useState(false);
	const [ toggleSize, setToggleSize ] = useState(false);

	const [ shadingContent, setShading ] = useState(false);
	const [ propertiesContent, setProperties ] = useState(false);
	const [ softnessContent, setSoftness ] = useState(false);
	const [ positionContent, setPosition ] = useState(false);
	const [ rotationContent, setRotation ] = useState(false);
	const [ shearContent, setShear ] = useState(false);
	const [ sizeContent, setSize ] = useState(false);


	return (
		<>
			<Row>
				<Toggle onClick={()=> setToggleShading(!toggleShading)} className={classNames('', toggleShading ? "active" : "")}/>
				<LabelToggle>Shading Element</LabelToggle>
				<ToggleTools onClick={()=> setShading(!shadingContent)} className={classNames('ic-controls', shadingContent ? "active" : "")}/>
			</Row>
			<img  src={ShadingImg} width="294" style={{'margin': '3px auto 11px 15px'}} className={classNames('', shadingContent ? "none" : "")}/>

			<MiniContainer className={classNames("first", shadingContent ? "none" : "")} style={{"borderBottom":"none"}}>
				<MiniToggle className={classNames('', propertiesContent ? "active" : "")} onClick={()=> setProperties(!propertiesContent)}>Properties</MiniToggle>
				<img  src={PropertiesImg} width="295" style={{'margin': '1px auto 9px 0px'}} className={classNames('', propertiesContent ? "none" : "")}/>
			</MiniContainer>

			<Row className="header">
				<Toggle onClick={()=> setToggleSoftness(!toggleSoftness)} className={classNames('', toggleSoftness ? "active" : "")}/>
				<LabelToggle>Softness</LabelToggle>
				<ToggleTools onClick={()=> setSoftness(!softnessContent)} className={classNames('ic-controls', softnessContent ? "active" : "")}/>
			</Row>
			<img  src={SoftnessImg} width="294" style={{'margin': '5px auto 14px 15px'}} className={classNames('', softnessContent ? "none" : "")}/>

			<Row className="header">
				<Toggle onClick={()=> setTogglePosition(!togglePosition)} className={classNames('', togglePosition ? "active" : "")}/>
				<LabelToggle>Position</LabelToggle>
				<ToggleTools onClick={()=> setPosition(!positionContent)} className={classNames('ic-controls', positionContent ? "active" : "")}/>
			</Row>
			<img  src={PositionImg} width="294" style={{'margin': '9px auto 9px 15px'}} className={classNames('', positionContent ? "none" : "")}/>

			<Row className="header">
				<Toggle onClick={()=> setToggleRotation(!toggleRotation)} className={classNames('', toggleRotation ? "active" : "")}/>
				<LabelToggle>Rotation</LabelToggle>
				<ToggleTools onClick={()=> setRotation(!rotationContent)} className={classNames('ic-controls', rotationContent ? "active" : "")}/>
			</Row>
			<img  src={RotationImg} width="294" style={{'margin': '6px auto 9px 15px'}} className={classNames('', rotationContent ? "none" : "")}/>

			<Row className="header">
				<Toggle onClick={()=> setToggleShear(!toggleShear)} className={classNames('', toggleShear ? "active" : "")}/>
				<LabelToggle>Shear</LabelToggle>
				<ToggleTools onClick={()=> setShear(!shearContent)} className={classNames('ic-controls', shearContent ? "active" : "")}/>
			</Row>
			<img  src={ShearImg} width="294" style={{'margin': '6px auto 9px 15px'}} className={classNames('', shearContent ? "none" : "")}/>

			<Row className="header">
				<Toggle onClick={()=> setToggleSize(!toggleSize)} className={classNames('', toggleSize ? "active" : "")}/>
				<LabelToggle>Size</LabelToggle>
				<ToggleTools onClick={()=> setSize(!sizeContent)} className={classNames('ic-controls', sizeContent ? "active" : "")}/>
			</Row>
			<img  src={SizeImg} width="294" style={{'margin': '6px auto 19px 15px'}} className={classNames('', sizeContent ? "none" : "")}/>
		</>
	)
}

export default TextStyle;

