
import React, { useState } from 'react';
import classNames from 'classnames';

// STYLES
import { Row, LabelToggle, Toggle } from '../../app/_inspector-styles';
import { ToggleTools } from '../../app/_toggle-tools';

// IMAGES
import LayoutImg 		from '../../../img/text/frame/layout.png';
import RotationImg 		from '../../../img/text/frame/rotation.png';
import BackgroundImg 	from '../../../img/text/frame/background.png';
import TransformImg 	from '../../../img/text/frame/transform.png';
import ShearImg 		from '../../../img/text/frame/shear.png';
import SizeImg 			from '../../../img/text/frame/size.png';

function TextFrame() {

	const [ toggleLayout, setToggleLayout ] = useState(false);
	const [ toggleRotation, setToggleRotation ] = useState(false);
	const [ toggleBackground, setToggleBackground ] = useState(false);
	const [ toggleTransform, setToggleTransform ] = useState(false);
	const [ toggleShear, setToggleShear ] = useState(false);
	const [ toggleSize, setToggleSize ] = useState(false);

	const [ layoutContent, setLayout ] = useState(false);
	const [ rotationContent, setRotation ] = useState(false);
	const [ backgroundContent, setBackground ] = useState(false);
	const [ transformContent, setTransform ] = useState(false);
	const [ shearContent, setShear ] = useState(false);
	const [ sizeContent, setSize ] = useState(false);

	return (
		<>
			<Row>
				<Toggle onClick={()=> setToggleLayout(!toggleLayout)} className={classNames('', toggleLayout ? "active" : "")}/>
				<LabelToggle>Layout</LabelToggle>
				<ToggleTools className="ic-reset"/>
				<ToggleTools onClick={()=> setLayout(!layoutContent)} className={classNames('ic-controls', layoutContent ? "active" : "")}/>
				<ToggleTools className={classNames('ic-kf')}/>
			</Row>
			<img  src={LayoutImg} width="294" style={{'margin': '5px auto 9px 15px'}} className={classNames('', layoutContent ? "none" : "")}/>

			<Row className="header">
				<Toggle onClick={()=> setToggleRotation(!toggleRotation)} className={classNames('', toggleRotation ? "active" : "")}/>
				<LabelToggle>Rotation</LabelToggle>
				<ToggleTools className="ic-reset"/>
				<ToggleTools onClick={()=> setRotation(!rotationContent)} className={classNames('ic-controls', rotationContent ? "active" : "")}/>
				<ToggleTools className={classNames('ic-kf')}/>
			</Row>
			<img  src={RotationImg} width="294" style={{'margin': '1px auto 9px 15px'}} className={classNames('', rotationContent ? "none" : "")}/>

			<Row className="header">
				<Toggle onClick={()=> setToggleBackground(!toggleBackground)} className={classNames('', toggleBackground ? "active" : "")}/>
				<LabelToggle>Background</LabelToggle>
				<ToggleTools className="ic-reset"/>
				<ToggleTools onClick={()=> setBackground(!backgroundContent)} className={classNames('ic-controls', backgroundContent ? "active" : "")}/>
				<ToggleTools className={classNames('ic-kf')}/>
			</Row>
			<img  src={BackgroundImg} width="294" style={{'margin': '6px auto 9px 15px'}} className={classNames('', backgroundContent ? "none" : "")}/>

			<Row className="header">
				<Toggle onClick={()=> setToggleTransform(!toggleTransform)} className={classNames('', toggleTransform ? "active" : "")}/>
				<LabelToggle>Transform</LabelToggle>
				<ToggleTools className="ic-reset"/>
				<ToggleTools onClick={()=> setTransform(!transformContent)} className={classNames('ic-controls', transformContent ? "active" : "")}/>
				<ToggleTools className={classNames('ic-kf')}/>
			</Row>
			<img  src={TransformImg} width="294" style={{'margin': '1px auto 9px 15px'}} className={classNames('', transformContent ? "none" : "")}/>

			<Row className="header">
				<Toggle onClick={()=> setToggleShear(!toggleShear)} className={classNames('', toggleShear ? "active" : "")}/>
				<LabelToggle>Shear</LabelToggle>
				<ToggleTools className="ic-reset"/>
				<ToggleTools onClick={()=> setShear(!shearContent)} className={classNames('ic-controls', shearContent ? "active" : "")}/>
				<ToggleTools className={classNames('ic-kf')}/>
			</Row>
			<img  src={ShearImg} width="294" style={{'margin': '6px auto 9px 15px'}} className={classNames('', shearContent ? "none" : "")}/>

			<Row className="header">
				<Toggle onClick={()=> setToggleSize(!toggleSize)} className={classNames('', toggleSize ? "active" : "")}/>
				<LabelToggle>Size</LabelToggle>
				<ToggleTools className="ic-reset"/>
				<ToggleTools onClick={()=> setSize(!sizeContent)} className={classNames('ic-controls', sizeContent ? "active" : "")}/>
				<ToggleTools className={classNames('ic-kf')}/>
			</Row>
			<img  src={SizeImg} width="294" style={{'margin': '6px auto 19px 15px'}} className={classNames('', sizeContent ? "none" : "")}/>
		</>
	)
}

export default TextFrame;
