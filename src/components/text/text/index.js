import React, { useState } from 'react';
import classNames from 'classnames';
import { Row, MiniContainer, MiniToggle, LabelToggle, ToggleTools } from '../../app/_inspector-styles';

import TextTextImg 			from '../../../img/text/text/text-text.png';
import TextTabSpacingImg 	from '../../../img/text/text/text-tab-spacing.png';
import TextAdvancedImg 		from '../../../img/text/text/text-advanced.png';

function TextText() {

	const [ textContent, setTextContent ] = useState(false);
	const [ textTabSpacing, setTabSpacing ] = useState(false);
	const [ textAdvanced, setAdvanced ] = useState(false);

	return (
		<>
			<Row>
				<LabelToggle style={{"margin":"6px 0 0 0px"}}>Text</LabelToggle>
				<ToggleTools className={classNames('ic-controls', textContent ? "active" : "")} onClick={()=> setTextContent(!textContent)}/>
				<ToggleTools className={classNames('ic-kf')}/>
			</Row>
			<img  src={TextTextImg} width="294" style={{'margin': '0px auto 9px 15px'}} className={classNames('', textContent ? "none" : "")}/>

			<MiniContainer className={classNames('first', textContent ? "none" : "")}>
				<MiniToggle className={classNames('', textTabSpacing ? "active" : "")} onClick={()=> setTabSpacing(!textTabSpacing)}>Tab Spacing</MiniToggle>
				<img  src={TextTabSpacingImg} width="294" style={{'margin': '6px 0px 9px -1px'}} className={classNames('', textTabSpacing ? "none" : "")}/>
			</MiniContainer>

			<MiniContainer className={classNames('no-border', textContent ? "none" : "")}>
				<MiniToggle className={classNames('', textAdvanced ? "active" : "")} onClick={()=> setAdvanced(!textAdvanced)}>Advanced</MiniToggle>
				<img  src={TextAdvancedImg} width="294" style={{'margin': '6px 0px 20px -1px'}} className={classNames('', textAdvanced ? "none" : "")}/>
			</MiniContainer>
		</>
	)
}

export default TextText;
