import React, { useState } from 'react';
import classNames from 'classnames';
import Video  	from '../inspector/video/Video';
import Sizing 	from '../inspector/sizing/Sizing';
import Audio 	from '../inspector/audio/Audio';
import Color 	from '../inspector/color/Color';
import Effects 	from '../inspector/effects/Effects';
import File 	from '../inspector/file/File';

import TextText 	from '../text/text';
import TextFrame 	from '../text/frame';
import TextStyle 	from '../text/style';
import TextSettings from '../text/settings';
import TextVideo 	from '../text/video';

import { AppContainer, Wrapper, ClipsWrapper, GlobalStyle, Header, Navigation, NavItem, NavTextItem } from './styles';
import { ClipsNavigation } from '../inspector/clips/styles';

function App() {

	const clipsNav = [
		{ id: 0, },
		{ id: 1, },
		{ id: 2, },
		{ id: 3, },
	]

	const textNavigation = [
		{ id: 0, label: 'Text', 	component: <TextText/> },
		{ id: 0, label: 'Frame', 	component: <TextFrame/> },
		{ id: 0, label: 'Style', 	component: <TextStyle/> },
		{ id: 0, label: 'Settings', component: <TextSettings/> },
		{ id: 0, label: 'Video', 	component: <TextVideo/> },
	]

	const InspectorNavigation = [
		{ id: 0, label: 'Video', 	component: <Video/> },
		{ id: 1, label: 'Sizing', 	component: <Sizing/> },
		{ id: 2, label: 'Audio', 	component: <Audio/> },
		{ id: 3, label: 'Color', 	component: <Color/> },
		{ id: 4, label: 'Effects', 	component: <Effects/> },
		{ id: 5, label: 'File', 	component: <File/> },
	]

	const [ activeClip, setActiveClip ] = useState(0);
	const [ activeIndex, setActiveIndex ] = useState(3);
	const [ activeTextIndex, setTextActiveIndex ] = useState(4);

	return (
		<>
			<GlobalStyle/>
			<AppContainer>
				<ClipsWrapper>
					{clipsNav.map((clip, i) => (
						<ClipsNavigation className={classNames('',  i === activeClip ? "active" : "")} onClick={() => setActiveClip(i)}></ClipsNavigation>
					))}
				</ClipsWrapper>

				{/* INSPECTOR */}
				<Wrapper className={classNames('', activeClip !== 0 ? "none" : "")}>
					{/* HEADER */}
					<Header>A021_06141404_C011.braw</Header>

					{/* NAVIGATION */}
					<Navigation>
						{InspectorNavigation.map((nav, i)=>(
							<NavItem onClick={()=> setActiveIndex(i)} className={classNames('', i === activeIndex ? 'active' : '')}>
								<span>{nav.label}</span>
							</NavItem>
						))}
					</Navigation>

					{/* COMPONENTS */}
					{InspectorNavigation.map((comp, i) => (
						<div className={classNames('', i !== activeIndex ? "none": "")}>{comp.component}</div>
					))}
				</Wrapper>

				{/* TEXT TEMPLATE */}
				<Wrapper className={classNames('', activeClip !== 1 ? "none" : "")}>
					{/* HEADER */}
					<Header>Text Template</Header>

					{/* NAVIGATION */}
					<Navigation>
						{textNavigation.map((navText, i)=>(
							<NavTextItem onClick={()=> setTextActiveIndex(i)} className={classNames('', i === activeTextIndex ? 'active' : '')}>
								<span>{navText.label}</span>
							</NavTextItem>
						))}
					</Navigation>

					{/* COMPONENTS */}
					{textNavigation.map((compText, i) => (
						<div className={classNames('', i !== activeTextIndex ? "none": "")}>{compText.component}</div>
					))}
				</Wrapper>
			</AppContainer>
		</>
	);
}

export default App;
