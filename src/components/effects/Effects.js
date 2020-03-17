import React, { useState } from 'react';
import classNames from 'classnames';
import { Row, MiniContainer, Toggle, MiniToggle, LabelToggle, ToggleTools } from '../app/styles';
import ColorGenerator 	from '../../img/effects/color-generator.png';
import FaceRefineImg 	from '../../img/effects/face-refinement.png';
import SkinMaskImg 		from '../../img/effects/skin-mask.png';
import TextureImg 		from '../../img/effects/texture.png';

function Effects() {
	const [ faceRefine, setFaceRefine ] = useState(false);
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
			{/* FACE REFINEMENT */}
			<Row>
				<Toggle onClick={()=> setFaceRefine(!faceRefine)} className={classNames('', faceRefine ? "active" : "")}/>
				<LabelToggle>Face Refinement</LabelToggle>
				<ToggleTools className="ic-delete"/>
				<ToggleTools className={classNames('ic-controls', faceRefineContent ? "active" : "")} onClick={()=> setFaceRefineContent(!faceRefineContent)}/>
			</Row>
			<img src={FaceRefineImg} width="294px" style={{'margin':'7px auto 11px auto'}} className={classNames('', faceRefineContent ? "none" : "")}/>

			<MiniContainer className="first">
				<MiniToggle className={classNames('', skinMask ? "active" : "")} onClick={()=> setSkinMask(!skinMask)}>Skin Mask</MiniToggle>
				<img src={SkinMaskImg} width="294px" style={{'margin':'7px auto 10px auto'}} className={classNames('', skinMask ? "none" : "")}/>
			</MiniContainer>

			<MiniContainer>
				<MiniToggle className={classNames('', texture ? "active" : "")} onClick={()=> setTexture(!texture)}>Texture</MiniToggle>
				<img src={TextureImg} width="294px" style={{'margin':'6px auto 9px auto'}} className={classNames('', texture ? "none" : "")}/>
			</MiniContainer>

			<MiniContainer>
				<MiniToggle className={classNames('', eyes ? "active" : "")} onClick={()=> setEyes(!eyes)}>Eyes</MiniToggle>
			</MiniContainer>

			<MiniContainer>
				<MiniToggle className={classNames('', colorG ? "active" : "")} onClick={()=> setColorG(!colorG)}>Color grading</MiniToggle>
			</MiniContainer>

			<MiniContainer>
				<MiniToggle className={classNames('', lips ? "active" : "")} onClick={()=> setLips(!lips)}>Lips</MiniToggle>
			</MiniContainer>

			<MiniContainer>
				<MiniToggle className={classNames('', brush ? "active" : "")} onClick={()=> setBrush(!brush)}>Brush</MiniToggle>
			</MiniContainer>

			<MiniContainer>
				<MiniToggle className={classNames('', forehead ? "active" : "")} onClick={()=> setForehead(!forehead)}>Forehead</MiniToggle>
			</MiniContainer>

			<MiniContainer className="no-border">
				<MiniToggle className={classNames('', cheek ? "active" : "")} onClick={()=> setCheek(!cheek)}>Cheek</MiniToggle>
			</MiniContainer>

			{/* COLOR GENERATOR */}
			<Row className="header">
				<Toggle onClick={()=> setToggleColorG(!toggleColorG)} className={classNames('', toggleColorG ? "active" : "")}/>
				<LabelToggle>Color Generator</LabelToggle>
				<ToggleTools className="ic-delete"/>
				<ToggleTools className={classNames('ic-controls', colorGenerator ? "active" : "")} onClick={()=> setColorGenerator(!colorGenerator)}/>
			</Row>
			<img src={ColorGenerator} width="294px" className={classNames('', colorGenerator ? "none" : "")} style={{'margin':'6px auto 19px auto'}}/>
		</>
	)
}

export default Effects;
