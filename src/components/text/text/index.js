import React, { useState } from 'react';
import classNames from 'classnames';
import { Row, MiniContainer, MiniToggle, LabelToggle, ToggleTools } from '../../app/styles';

import TextTextImg from '../../../img/text/text/text-text.png';
import TextTabSpacingImg from '../../../img/text/text/text-tab-spacing.png';
import TextAdvancedImg from '../../../img/text/text/text-advanced.png';

function TextText() {

	const [ textContent, setTextContent ] = useState(false);
	const [ textTabSpacing, setTabSpacing ] = useState(false);
	const [ textAdvanced, setAdvanced ] = useState(false);

	return (
		<>
			<Row>
				<LabelToggle>Text</LabelToggle>
				<ToggleTools className={classNames('ic-controls', textContent ? "active" : "")} onClick={()=> setTextContent(!textContent)}/>
			</Row>
			<img  src={TextTextImg} width="294" style={{'margin': '1px auto 10px 15px'}} className={classNames('', textContent ? "none" : "")}/>

			<MiniContainer className="first">
				<MiniToggle className={classNames('', textTabSpacing ? "active" : "")} onClick={()=> setTabSpacing(!textTabSpacing)}>Tab Spacing</MiniToggle>
				<img  src={TextTabSpacingImg} width="294" style={{'margin': '1px auto 10px auto'}} className={classNames('', textTabSpacing ? "none" : "")}/>
			</MiniContainer>

			<MiniContainer className="no-border">
				<MiniToggle className={classNames('', textAdvanced ? "active" : "")} onClick={()=> setAdvanced(!textAdvanced)}>Advanced</MiniToggle>
				<img  src={TextAdvancedImg} width="294" style={{'margin': '1px auto 10px auto'}} className={classNames('', textAdvanced ? "none" : "")}/>
			</MiniContainer>
		</>
	)
}

export default TextText;
