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

import GeneratorSizing from '../generator/sizing';
import GeneratorVideo from '../generator/video';

import TransitionVideo from '../transition/video';
import TransitionAudio from '../transition/audio';

import { AppContainer, Wrapper, ClipsWrapper, GlobalStyle, Header, Navigation, NavItem, NavTextItem, NavGenItem, NavTransItem } from './styles';
import { ClipsNavigation } from '../inspector/clips/styles';

function App() {

	const clipsNav = [
		{ id: 0, },
		{ id: 1, },
		{ id: 2, },
		{ id: 3, },
	]

	const InspectorNavigation = [
		{ id: 0, label: 'Video', 	component: <Video/> },
		{ id: 1, label: 'Sizing', 	component: <Sizing/> },
		{ id: 2, label: 'Audio', 	component: <Audio/> },
		{ id: 3, label: 'Color', 	component: <Color/> },
		{ id: 4, label: 'Effects', 	component: <Effects/> },
		{ id: 5, label: 'File', 	component: <File/> },
	]

	const textNavigation = [
		{ id: 0, label: 'Text', 	component: <TextText/> },
		{ id: 0, label: 'Frame', 	component: <TextFrame/> },
		{ id: 0, label: 'Style', 	component: <TextStyle/> },
		{ id: 0, label: 'Settings', component: <TextSettings/> },
		{ id: 0, label: 'Video', 	component: <TextVideo/> },
	]

	const generatorNavigation = [
		{ id: 0, label: 'Video', 	component: <GeneratorVideo/> },
		{ id: 1, label: 'Sizing', 	component: <GeneratorSizing/> },
	]

	const transitionNavigation = [
		{ id: 0, label: 'Video', 	component: <TransitionVideo/> },
		{ id: 0, label: 'Audio', 	component: <TransitionAudio/> },
	]

	const [ activeClip, setActiveClip ] = useState(0);
	const [ activeIndex, setActiveIndex ] = useState(0);
	const [ activeTextIndex, setTextActiveIndex ] = useState(0);
	const [ activeGenIndex, setGenActiveIndex ] = useState(0);
	const [ activeTransIndex, setTransActiveIndex ] = useState(0);

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
					<Header>D004_07081656_C011.braw</Header>

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
					<Header>Fusion Title - Text+</Header>

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

				{/* GENERATOR */}
				<Wrapper className={classNames('', activeClip !== 2 ? "none" : "")}>
					{/* HEADER */}
					<Header>Generator</Header>

					{/* NAVIGATION */}
					<Navigation>
						{generatorNavigation.map((navGen, i)=>(
							<NavGenItem onClick={()=> setGenActiveIndex(i)} className={classNames('', i === activeGenIndex ? 'active' : '')}>
								<span>{navGen.label}</span>
							</NavGenItem>
						))}
					</Navigation>

					{/* COMPONENTS */}
					{generatorNavigation.map((compGen, i) => (
						<div className={classNames('', i !== activeGenIndex ? "none": "")}>{compGen.component}</div>
					))}
				</Wrapper>

				{/* TRANSITIONS */}
				<Wrapper className={classNames('', activeClip !== 3 ? "none" : "")}>
					{/* HEADER */}
					<Header>Transition</Header>

					{/* NAVIGATION */}
					<Navigation>
						{transitionNavigation.map((navTrans, i)=>(
							<NavTransItem onClick={()=> setTransActiveIndex(i)} className={classNames('', i === activeTransIndex ? 'active' : '')}>
								<span>{navTrans.label}</span>
							</NavTransItem>
						))}
					</Navigation>

					{/* COMPONENTS */}
					{transitionNavigation.map((compText, i) => (
						<div className={classNames('', i !== activeTransIndex ? "none": "")}>{compText.component}</div>
					))}
				</Wrapper>
			</AppContainer>
		</>
	);
}

export default App;
