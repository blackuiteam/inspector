import React, { useState } from 'react';
import classNames from 'classnames';
import Video  	from '../video/Video';
import Sizing 	from '../sizing/Sizing';
import Audio 	from '../audio/Audio';
import Color 	from '../color/Color';
import Effects 	from '../effects/Effects';
import File 	from '../file/File';

import { Wrapper, GlobalStyle, Header, Navigation, NavItem } from './styles';

function App() {

	const navigation = [
		{ id: 0, label: 'Video', 	component: <Video/> },
		{ id: 1, label: 'Sizing', 	component: <Sizing/> },
		{ id: 2, label: 'Audio', 	component: <Audio/> },
		{ id: 3, label: 'Color', 	component: <Color/> },
		{ id: 4, label: 'Effects', 	component: <Effects/> },
		{ id: 5, label: 'File', 	component: <File/> },
	]

	const [ activeIndex, setActiveIndex ] = useState(5);

	return (
		<>
			<GlobalStyle/>
			<Wrapper>
				{/* HEADER */}
				<Header>A021_06141404_C011.braw</Header>

				{/* NAVIGATION */}
				<Navigation>
					{navigation.map((nav, i)=>(
						<NavItem onClick={()=> setActiveIndex(i)} className={classNames('', i === activeIndex ? 'active' : NavItem)}>
							<span>{nav.label}</span>
						</NavItem>
					))}
				</Navigation>

				{/* COMPONENTS */}
				{navigation.map((comp, i) => (
					<div className={classNames('', i !== activeIndex ? "none": "")}>{comp.component}</div>
				))}
			</Wrapper>
		</>
	);
}

export default App;
