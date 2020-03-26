
import styled, { createGlobalStyle } from 'styled-components';
import { size, position, bgimage } from './mixins';

// SLIDERS
import SlideBlueImg 		from '../../img/common/slider-blue.png';
import SliderBoostImg 		from '../../img/common/slider-boost.png';
import SliderBwImg 			from '../../img/common/slider-bw.png';
import SliderCyanImg 		from '../../img/common/slider-cyan.png';
import SliderDefaultImg 	from '../../img/common/slider-default.png';
import SliderDetailImg 		from '../../img/common/slider-detail.png';
import SliderGreenImg 		from '../../img/common/slider-green.png';
import SliderHighlightImg 	from '../../img/common/slider-highlight.png';
import SliderHueBlueImg 	from '../../img/common/slider-hue-blue.png';
import SliderHueCyanImg 	from '../../img/common/slider-hue-cyan.png';
import SliderHueGlobalImg 	from '../../img/common/slider-hue-global.png';
import SliderHueGreenImg 	from '../../img/common/slider-hue-green.png';
import SliderHueMagentaImg 	from '../../img/common/slider-hue-magenta.png';
import SliderHueRedImg 		from '../../img/common/slider-hue-red.png';
import SliderHueYellowImg 	from '../../img/common/slider-hue-yellow.png';
import SliderLumImg 		from '../../img/common/slider-lum.png';
import SliderMagentaImg 	from '../../img/common/slider-magenta.png';
import SliderMixImg 		from '../../img/common/slider-mix.png';
import SliderPivotImg 		from '../../img/common/slider-pivot.png';
import SliderRedImg 		from '../../img/common/slider-red.png';
import SliderSatImg 		from '../../img/common/slider-sat.png';
import SliderShadowImg 		from '../../img/common/slider-shadow.png';
import SliderTemperatureImg from '../../img/common/slider-temperature.png';
import SliderTintImg 		from '../../img/common/slider-tint.png';
import SliderYellowImg 		from '../../img/common/slider-yellow.png';

// NAVIGATION INSPECTOR
import VideoImg 		from '../../img/nav/video.png';
import VideoActiveImg 	from '../../img/nav/video-active.png';

import SizingImg 		from '../../img/nav/sizing.png';
import SizingActiveImg 	from '../../img/nav/sizing-active.png';

import AudioImg 		from '../../img/nav/audio.png';
import AudioActiveImg 	from '../../img/nav/audio-active.png';

import ColorImg 		from '../../img/nav/color.png';
import ColorActiveImg 	from '../../img/nav/color-active.png';

import EffectsImg 		from '../../img/nav/effects.png';
import EffectsActiveImg from '../../img/nav/effects-active.png';

import FileImg 			from '../../img/nav/file.png';
import FileActiveImg 	from '../../img/nav/file-active.png';

// NAVIGATION TEXT TEMPLATE
import TextImg 				from '../../img/nav/text/text.png';
import TextActiveImg		from '../../img/nav/text/text-active.png';
import FrameImg 			from '../../img/nav/text/frame.png';
import FrameActiveImg		from '../../img/nav/text/frame-active.png';
import StyleImg 			from '../../img/nav/text/style.png';
import StyleActiveImg		from '../../img/nav/text/style-active.png';
import SettingsImg 			from '../../img/nav/text/settings.png';
import SettingsActiveImg	from '../../img/nav/text/settings-active.png';
import TextVideoImg 		from '../../img/nav/text/video.png';
import TextVideoActiveImg	from '../../img/nav/text/video-active.png';

import Arrow 		from '../../img/icons/arrow.png';
import CursorImg 	from '../../img/common/cursor.png';
import Tick 		from '../../img/common/tick.png';

import iconAudio 		from '../../img/icons/audio.png';
import iconAudioActive 	from '../../img/icons/audio_active.png';
import iconAudioHover 	from '../../img/icons/audio_active_hover.png';

import iconAuto 		from '../../img/icons/auto.png';
import iconAutoActive 	from '../../img/icons/auto_active.png';
import iconAutoHover 	from '../../img/icons/auto_active_hover.png';

import iconColScience 			from '../../img/icons/col_science.png';
import iconColScienceActive 	from '../../img/icons/col_science_active.png';
import iconColScienceHover 		from '../../img/icons/col_science_active_hover.png';

import iconColorWheels 			from '../../img/icons/color_wheels.png';
import iconColorWheelsActive 	from '../../img/icons/color_wheels_active.png';
import iconColorWheelsHover 	from '../../img/icons/color_wheels_active_hover.png';

import iconControls 		from '../../img/icons/controls.png';
import iconControlsActive 	from '../../img/icons/controls_active.png';
import iconControlsHover 	from '../../img/icons/controls_active_hover.png';

import iconCrop 			from '../../img/icons/crop.png';
import iconCropActive 		from '../../img/icons/crop_active.png';
import iconCropHover 		from '../../img/icons/crop_active_hover.png';

import iconCurves 			from '../../img/icons/curves.png';
import iconCurvesActive 	from '../../img/icons/curves_active.png';
import iconCurvesHover 		from '../../img/icons/curves_active_hover.png';

import iconDelete			from '../../img/icons/delete.png';
import iconDeleteActive 	from '../../img/icons/delete_push.png';
import iconDeleteHover 		from '../../img/icons/delete_hover.png';

import iconDynamic			from '../../img/icons/dyn-zoom.png';
import iconDynamicActive 	from '../../img/icons/dyn-zoom_active.png';
import iconDynamicHover 	from '../../img/icons/dyn-zoom_active.png';

import iconEq				from '../../img/icons/eq.png';
import iconEqActive 		from '../../img/icons/eq_active.png';
import iconEqHover 			from '../../img/icons/eq_active_hover.png';

import iconSpeed			from '../../img/icons/speed.png';
import iconSpeedActive 		from '../../img/icons/speed_active.png';
import iconSpeedHover 		from '../../img/icons/speed_active.png';

import iconPreview			from '../../img/icons/preview.png';
import iconPreviewActive 	from '../../img/icons/preview_active.png';
import iconPreviewHover 	from '../../img/icons/preview_active_hover.png';

import iconTransform		from '../../img/icons/transform.png';
import iconTransformActive 	from '../../img/icons/transform_active.png';
import iconTransformHover 	from '../../img/icons/transform_active_hover.png';


export const GlobalStyle = createGlobalStyle `
	* {
		box-sizing: border-box;
		font-family: "OpenSans regular";
		user-select: none;
		cursor: default;
	}

	body {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		background-color: #28282E;
	}

	img {
		display: block;
		margin: 0 auto;
	}

	.none { display: none; }

	@font-face {
		font-family: 'OpenSans light';
		font-weight: 200;
		src: url('../../fonts/opensans-200.ttf') format('truetype');
	}

	@font-face {
		font-family: 'OpenSans regular';
		font-weight: 300;
		src: url('../../fonts/opensans-300.ttf') format('truetype');
	}

	@font-face {
		font-family: 'OpenSans semibold';
		font-weight: 400;
		src: url('../../fonts/opensans-400.ttf') format('truetype');
	}

	@font-face {
		font-family: 'OpenSans bold';
		font-weight: 600;
		src: url('../../fonts/opensans-600.ttf') format('truetype');
	}
`

export const AppContainer = styled.div `
	${size('700px', 'auto', 'table')};
	${position('3%', '', '', '50%')};
	transform: translate(-50%, -10%);
`

export const Wrapper = styled.div `
	${size('336px', 'auto', 'block')};
	${position('0', '0', '', '')};
	border: 1px solid #000;
	color: #fff;
	margin-bottom: 60px;
`

export const ClipsWrapper = styled.div `
	${size('336px', 'auto', 'block')};
	${position('0', '', '', '0')};
`

export const Header = styled.div `
	${size('100%', '24px')};
	display: flex;
	padding: 2px 0 0 9px;
	font-size: 12px;
	background-color: #212126;
	border-bottom: 1px solid #000;
	color: #fff;
`

export const Navigation = styled.div `
	${size('100%', '49px')};
	display: flex;
	justify-content: center;
	background-color: #212126;
	border-bottom: 1px solid #000;
`

export const NavItem = styled.div `
	${size('46px', '100%')};
	position: relative;
	display: block;
	float: left;

	> span {
		${position('', '', '7px', '0px')};
		display: block;
		width: 100%;
		font-size: 10px;
		text-align: center;
		color: #828282;
	}

	&.active {
		&:before {
			content: "";
			${size('40px', '2px')};
			${position('', '', '1px', '3px')};
			background-color: #E64B3D;
		}

		span {
			color: #fff;
		}

		:nth-child(1) {
			${bgimage(VideoActiveImg,'no-repeat', '11px 6px', '24px 18px')}
		};

		:nth-child(2) {
			${bgimage(SizingActiveImg,'no-repeat', '11px 7px', '25px 16px')}
		};

		:nth-child(3) {
			${bgimage(AudioActiveImg,'no-repeat', '11px 5px', '25px 19px')}
		}

		:nth-child(4) {
			${bgimage(ColorActiveImg,'no-repeat', '12px 4px', '23px 21px')}
		}

		:nth-child(5) {
			${bgimage(EffectsActiveImg,'no-repeat', '10px 4px', '25px 21px')}
		}

		:nth-child(6) {
			${bgimage(FileActiveImg,'no-repeat', '11px 4px', '25px 21px')}
		}
	}

	:nth-child(1) {
		${bgimage(VideoImg,'no-repeat', '13px 8px', '21px 13px')}
	};

	:nth-child(2) {
		${bgimage(SizingImg,'no-repeat', '13px 8px', '21px 13px')}
	};

	:nth-child(3) {
		${bgimage(AudioImg,'no-repeat', '11px 5px', '25px 19px')}
	}

	:nth-child(4) {
		${bgimage(ColorImg,'no-repeat', '11px 4px', '25px 21px')}
	}

	:nth-child(5) {
		${bgimage(EffectsImg,'no-repeat', '11px 4px', '25px 21px')}
	}

	:nth-child(6) {
		${bgimage(FileImg,'no-repeat', '11px 4px', '25px 21px')}
	}
`

export const NavTextItem = styled.div `
	${size('46px', '100%')};
	position: relative;
	display: block;
	float: left;

	> span {
		${position('', '', '6px', '0px')};
		display: block;
		width: 100%;
		font-size: 10px;
		text-align: center;
		color: #828282;
	}

	&.active {
		&:before {
			content: "";
			${size('40px', '2px')};
			${position('', '', '1px', '3px')};
			background-color: #E64B3D;
		}

		:nth-child(1) {
			${bgimage(TextActiveImg,'no-repeat', '15px 7px', '16px 18px')}
		};

		:nth-child(2) {
			${bgimage(FrameActiveImg,'no-repeat', '8px 0', '30px 32px')}
		};

		:nth-child(3) {
			${bgimage(StyleActiveImg,'no-repeat', '9px 0', '30px 32px')}
		};

		:nth-child(4) {
			${bgimage(SettingsActiveImg,'no-repeat', '8px 0', '30px 32px')}
		};

		:nth-child(5) {
			${bgimage(TextVideoActiveImg,'no-repeat', '11px 7px', '24px 18px')}
		};

		span {
			color: #fff;
		}
	}

	:nth-child(1) {
		${bgimage(TextImg,'no-repeat', '8px 0px', '32px 32px')}
	};

	:nth-child(2) {
		${bgimage(FrameImg,'no-repeat', '8px 0', '30px 32px')}
	};

	:nth-child(3) {
		${bgimage(StyleImg,'no-repeat', '9px 0', '30px 32px')}
	};

	:nth-child(4) {
		${bgimage(SettingsImg,'no-repeat', '8px 0', '30px 32px')}
	};

	:nth-child(5) {
		${bgimage(TextVideoImg,'no-repeat', '13px 9px', '21px 13px')}
	};
`

export const NavGenItem = styled.div `
	${size('46px', '100%')};
	position: relative;
	display: block;
	float: left;

	:nth-child(1) {
		${bgimage(VideoImg,'no-repeat', '13px 9px', '21px 14px')}
	};

	:nth-child(2) {
		${bgimage(SizingImg,'no-repeat', '13px 9px', '21px 14px')}
	};

	&.active {
		box-shadow: inset 0px -2px 0px 0px rgba(230,75,61,1);

		span {
			color: #fff;
		}
	}

	> span {
		${position('', '', '5px', '0px')};
		display: block;
		width: 100%;
		font-size: 10px;
		text-align: center;
		color: #828282;
	}
`

export const NavTransItem = styled.div `
	${size('46px', '100%')};
	position: relative;
	display: block;
	float: left;

	:nth-child(1) {
		${bgimage(VideoImg,'no-repeat', '13px 8px', '21px 13px')}
	};

	:nth-child(2) {
		${bgimage(AudioImg,'no-repeat', '11px 5px', '25px 19px')}
	};

	&.active {
		box-shadow: inset 0px -2px 0px 0px rgba(230,75,61,1);

		:nth-child(1) {
			${bgimage(VideoActiveImg,'no-repeat', '11px 6px', '24px 18px')}
		};

		:nth-child(2) {
			${bgimage(AudioActiveImg,'no-repeat', '11px 5px', '25px 19px')}
		};

		span {
			color: #fff;
		}
	}

	> span {
		${position('', '', '5px', '0px')};
		display: block;
		width: 100%;
		font-size: 10px;
		text-align: center;
		color: #828282;
	}
`

export const Toggle = styled.div `
	${size('21px', '14px')};
	position: relative;
	float: left;
	margin: 9px 0 0 0px;
	background-color: #171717;
	border-radius: 30px;

	&::before {
		${size('8px', '8px')};
		${position('3px', '', '', '10px')};
		content:"";
		background-color: #E64B3D;
		border-radius: 50%;
		transition: .3s;
	}

	&.active {
		&::before {
			${position('3px', '', '', '3px')};
			background-color: #929292;
		}
	}
`

export const LabelToggle = styled.div `
	display: block;
	float: left;
	margin: 6px 0 0 8px;
	font-size: 11px;
	color: #fff;
`

export const ToggleTools = styled.div `
	${size('23px', '20px')};
	display: block;
	float: right;
	margin: 5px 0 0 0;

	&.ic-audio {
		${ bgimage(iconAudioActive,'no-repeat', '1px -1px', '23px 23px') }

		&.active {
			${ bgimage(iconAudio,'no-repeat', '1px -1px', '23px 23px') }
		}

		&:hover {
			${ bgimage(iconAudioHover,'no-repeat', '1px -1px', '23px 23px') }
		}
	}

	&.ic-auto {
		${ bgimage(iconAuto,'no-repeat', '1px -1px', '23px 23px') }

		&.active {
			${ bgimage(iconAutoActive,'no-repeat', '1px -1px', '23px 23px') }
		}

		&:hover {
			${ bgimage(iconAutoHover,'no-repeat', '1px -1px', '23px 23px') }
		}
	}

	&.ic-col-science {
		${ bgimage(iconColScienceActive,'no-repeat', '1px -1px', '23px 23px') }

		&.active {
			${ bgimage(iconColScience,'no-repeat', '1px -1px', '23px 23px') }
		}

		&:hover {
			${ bgimage(iconColScienceHover,'no-repeat', '1px -1px', '23px 23px') }
		}
	}

	&.ic-colorwheel {
		${ bgimage(iconColorWheelsActive,'no-repeat', '1px -1px', '23px 23px') }

		&.active {
			${ bgimage(iconColorWheels,'no-repeat', '1px -1px', '23px 23px') }
		}

		&:hover {
			${ bgimage(iconColorWheelsHover,'no-repeat', '1px -1px', '23px 23px') }
		}
	}

	&.ic-controls {
		${ bgimage(iconControlsActive,'no-repeat', '1px -1px', '23px 23px') }

		&.active {
			${ bgimage(iconControls,'no-repeat', '1px -1px', '23px 23px') }
		}

		&:hover {
			${ bgimage(iconControlsHover,'no-repeat', '1px -1px', '23px 23px') }
		}
	}

	&.ic-crop {
		${ bgimage(iconCropActive,'no-repeat', '1px -1px', '23px 23px') }

		&.active {
			${ bgimage(iconCrop,'no-repeat', '1px -1px', '23px 23px') }
		}

		&:hover {
			${ bgimage(iconCropHover,'no-repeat', '1px -1px', '23px 23px') }
		}
	}

	&.ic-curves {
		${ bgimage(iconCurvesActive,'no-repeat', '1px -1px', '23px 23px') }

		&.active {
			${ bgimage(iconCurves,'no-repeat', '1px -1px', '23px 23px') }
		}

		&:hover {
			${ bgimage(iconCurvesHover,'no-repeat', '1px -1px', '23px 23px') }
		}
	}

	&.ic-delete {
		${ bgimage(iconDelete,'no-repeat', '1px -1px', '23px 23px') }

		&.active {
			${ bgimage(iconDeleteActive,'no-repeat', '1px -1px', '23px 23px') }
		}

		&:hover {
			${ bgimage(iconDeleteHover,'no-repeat', '1px -1px', '23px 23px') }
		}
	}

	&.ic-dynamic {
		${ bgimage(iconDynamicActive,'no-repeat', '1px -1px', '23px 23px') }

		&.active {
			${ bgimage(iconDynamic,'no-repeat', '1px -1px', '23px 23px') }
		}

		&:hover {
			${ bgimage(iconDynamicHover,'no-repeat', '1px -1px', '23px 23px') }
		}
	}

	&.ic-eq {
		${ bgimage(iconEqActive,'no-repeat', '1px -1px', '23px 23px') }

		&.active {
			${ bgimage(iconEq,'no-repeat', '1px -1px', '23px 23px') }
		}

		&:hover {
			${ bgimage(iconEqHover,'no-repeat', '1px -1px', '23px 23px') }
		}
	}

	&.ic-speed {
		${ bgimage(iconSpeedActive,'no-repeat', '1px -1px', '23px 23px') }

		&.active {
			${ bgimage(iconSpeed,'no-repeat', '1px -1px', '23px 23px') }
		}

		&:hover {
			${ bgimage(iconSpeedHover,'no-repeat', '1px -1px', '23px 23px') }
		}
	}

	&.ic-preview {
		${ bgimage(iconPreviewActive,'no-repeat', '1px -1px', '23px 23px') }

		&.active {
			${ bgimage(iconPreview,'no-repeat', '1px -1px', '23px 23px') }
		}

		&:hover {
			${ bgimage(iconPreviewHover,'no-repeat', '1px -1px', '23px 23px') }
		}
	}

	&.ic-transform {
		${ bgimage(iconTransformActive,'no-repeat', '1px -1px', '23px 23px') }

		&.active {
			${ bgimage(iconTransform,'no-repeat', '1px -1px', '23px 23px') }
		}

		&:hover {
			${ bgimage(iconTransformHover,'no-repeat', '1px -1px', '23px 23px') }
		}
	}
`

export const Row = styled.div `
	${size('100%', '30px')};
	padding: 0 20px 0 16px;

	&.header {
		border-top: 1px solid #000;
	}

	&.mini-title {
		height: 23px;
		padding: 8px 0 0 16px;
		font-family: 'OpenSans light';
		font-size: 10px;
		color: #979797;
	}

	&.mini-row {
		position: relative;
		height: 4px;

		&:before {
			content: "";
			${size('calc(100% - 39px)', '1px', 'block')};
			${position('0','','','15px')};
			background-color: #1B1B1E;
		}
	}
`

export const MiniContainer = styled.div `
	${size('calc(100% - 39px)', 'auto', 'block')};
	margin: 0 0 0 16px;
	border-bottom: 1px solid #1B1B1E;

	&.first {
		border-top: 1px solid #1B1B1E;
	}

	&.no-border {
		border: none;
		/* margin: 0 0 0 0; */
	}

	.row {
		width: 100%;
    	height: 30px;
		padding: 0 0 0 0;
	}
`

export const MiniToggle = styled.div `
	${size('100%', '29px')};
	position: relative;
	margin: 0 auto;
	padding: 7px 0 0 20px;
	font-size: 11px;

	&:before {
		content: "";
		${size('9px', '6px', 'block')};
		${position('12px', '', '', '0px')};
		${bgimage(Arrow,'no-repeat', '0 0', '9px 6px')};
	}

	&.active {
		&:before {
			transform: rotate(270deg);
		}
	}
`

export const RoundedButton = styled.div `
	${size('95px', '21px', 'block')};
	float: left;
	text-align: center;
	border: 1px solid #43474D;
	border-radius: 50px;
	color: #979797;
	font-family: 'OpenSans light';
	font-size: 11px;
	margin: -1px 0 0 0;
	padding: 1px 0 0 0;

	&.offset {
		width: 80px;
		margin: 0 0 0 106px;
	}
`

export const InputLabel = styled.label `
	${size('auto', '17px', 'block')};
	${position('2px', '', '', '24px')};
	color: #979797;
	font-family: 'OpenSans light';
	font-size: 11px;
`

export const Input = styled.input `
	${size('50px', '17px', 'block')};
	${position('1px', '29px', '', '')};
	border: 1px solid transparent;
	background-color: #28282E;
	text-align: right;
	color: #979797;
	padding: 0 3px;
	outline: none;
	user-select: none;

	&:hover, &:focus, &.active {
		color: #fff;
		border: 1px solid #E64B3D;
		border-radius: 3px;
	}
`

export const Tabs = styled.div `
	${size('auto', '23px', 'block')};
	margin: 0 25px 0 15px;

	.btn-tab {
		float: left;
		background-color: #222226;
		border-right: 1px solid #000;
		border-top: 1px solid #000;
		border-bottom: 1px solid #000;
		text-align: center;
		font-family: 'OpenSans light';
		font-size: 11px;
		color: #979797;
		padding: 3px 0 0 0;

		&.active {
			color: #fff;
			background-color: #171717;
		}

		&:first-child {
			border-top-left-radius: 2px;
			border-bottom-left-radius: 2px;
			border-left: 1px solid #000;
		}

		&:last-child {
			border-top-right-radius: 2px;
			border-bottom-right-radius: 2px;
			border-right: 1px solid #000;
		}

		&.two {
			${size('calc(100% / 2)', '100%')};
		}

		&.three {
			${size('calc(100% / 3)', '100%')};
		}

		&.four {
			${size('calc(100% / 4)', '100%')};
		}

		&.five {
			${size('calc(100% / 5)', '100%')};
		}
	}
`

export const CheckBox = styled.div `
	${size('auto','15px','block')};
	position: relative;
	margin: 3px 0 0 -1px;
	padding: 0 0 0 23px;
	float: left;
	font-family: 'OpenSans light';
	font-size: 11px;
	color: #979797;

	&:before {
		content: "";
		${size('13px','13px','block')};
		${position('0', '', '', '0')};
		border: 1px solid #000;
		background-color: #222226;
		border-radius: 2px;
		float: left;
	}

	&.active {
		&:before {
			${bgimage(Tick, 'no-repeat', 'center', '10px 10px')};
		}
	}
`

export const RcSlider = styled.div `
	${size('100%', '23px', '')};
	position: relative;

	&.opacity {
		pointer-events: none;
		opacity: .5;
	}

	&:active {
		label { color: #fff; };
		input { color: #fff; }
	}

	.rc-slider {
		${size('calc(100% - 40px)', '4px', '')};
		${position('', '', '0px', '0px')};
		margin: 0 25px 0 15px;
		border: 1px solid #000;
		border-bottom-left-radius: 2px;
		border-bottom-right-radius: 2px;
		-ms-touch-action: none;
			touch-action: none;
		box-sizing: border-box;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		cursor: ew-resize;

		&.blue,
		&.boost,
		&.bw,
		&.cyan,
		&.default,
		&.detail,
		&.green,
		&.highlight,
		&.hue-blue,
		&.hue-cyan,
		&.hue-global,
		&.hue-green,
		&.hue-magenta,
		&.hue-red,
		&.hue-yellow,
		&.lum,
		&.magenta,
		&.mix,
		&.pivot,
		&.red,
		&.saturation,
		&.shadow,
		&.temperature,
		&.tint,
		&.yellow,
		&.white {
			.rc-slider-track {
				background-color: transparent;
			}

			.rc-slider-handle {
				background-color: #fff;

				&:hover {
					background-color: #E64B3D;
				}
			}

			&.active {
				.rc-slider-handle {
					background-color: #E64B3D;
				}
			}
		}

		&.blue {
			.rc-slider-rail {
				${bgimage(SlideBlueImg,'no-repeat', '0 0', '100%')};
			}
		}

		&.boost {
			.rc-slider-rail {
				${bgimage(SliderBoostImg,'no-repeat', '0 0', '100%')};
			}
		}

		&.bw {
			.rc-slider-rail {
				${bgimage(SliderBwImg,'no-repeat', '0 0', '100%')};
			}
		}

		&.cyan {
			.rc-slider-rail {
				${bgimage(SliderCyanImg,'no-repeat', '0 0', '100%')};
			}
		}

		&.default {
			.rc-slider-rail {
				${bgimage(SliderDefaultImg,'no-repeat', '0 0', '100%')};
			}
		}

		&.detail {
			.rc-slider-rail {
				${bgimage(SliderDetailImg,'no-repeat', '0 0', '100%')};
			}
		}

		&.green {
			.rc-slider-rail {
				${bgimage(SliderGreenImg,'no-repeat', '0 0', '100%')};
			}
		}

		&.highlight {
			.rc-slider-rail {
				${bgimage(SliderHighlightImg,'no-repeat', '0 0', '100%')};
			}
		}

		&.hue-blue {
			.rc-slider-rail {
				${bgimage(SliderHueBlueImg,'no-repeat', '0 0', '100%')};
			}
		}

		&.hue-cyan {
			.rc-slider-rail {
				${bgimage(SliderHueCyanImg,'no-repeat', '0 0', '100%')};
			}
		}

		&.hue-global {
			.rc-slider-rail {
				${bgimage(SliderHueGlobalImg,'no-repeat', '0 0', '100%')};
			}
		}

		&.hue-green {
			.rc-slider-rail {
				${bgimage(SliderHueGreenImg,'no-repeat', '0 0', '100%')};
			}
		}

		&.hue-magenta {
			.rc-slider-rail {
				${bgimage(SliderHueMagentaImg,'no-repeat', '0 0', '100%')};
			}
		}

		&.hue-red {
			.rc-slider-rail {
				${bgimage(SliderHueRedImg,'no-repeat', '0 0', '100%')};
			}
		}

		&.hue-yellow {
			.rc-slider-rail {
				${bgimage(SliderHueYellowImg,'no-repeat', '0 0', '100%')};
			}
		}

		&.lum {
			.rc-slider-rail {
				${bgimage(SliderLumImg,'no-repeat', '0 0', '100%')};
			}
		}

		&.magenta {
			.rc-slider-rail {
				${bgimage(SliderMagentaImg,'no-repeat', '0 0', '100%')};
			}
		}

		&.mix {
			.rc-slider-rail {
				${bgimage(SliderMixImg,'no-repeat', '0 0', '100%')};
			}
		}

		&.pivot {
			.rc-slider-rail {
				${bgimage(SliderPivotImg,'no-repeat', '0 0', '100%')};
			}
		}

		&.red {
			.rc-slider-rail {
				${bgimage(SliderRedImg,'no-repeat', '0 0', '100%')};
			}
		}

		&.saturation {
			.rc-slider-rail {
				${bgimage(SliderSatImg,'no-repeat', '0 0', '100%')};
			}
		}

		&.shadow {
			.rc-slider-rail {
				${bgimage(SliderShadowImg,'no-repeat', '0 0', '100%')};
			}
		}

		&.temperature {
			.rc-slider-rail {
				${bgimage(SliderTemperatureImg,'no-repeat', '0 0', '100%')};
			}
		}

		&.tint {
			.rc-slider-rail {
				${bgimage(SliderTintImg,'no-repeat', '0 0', '100%')};
			}
		}

		&.yellow {
			.rc-slider-rail {
				${bgimage(SliderYellowImg,'no-repeat', '0 0', '100%')};
			}
		}

		&.white {
			.rc-slider-handle {
				background-color: #fff;

				&:hover {
					background-color: #E64B3D;
				}
			}

			&.active {
				.rc-slider-handle {
					background-color: #E64B3D;
				}
			}
		}
	}

	.rc-slider-rail {
		${size('100%', '2px')};
		position: absolute;
		background-color: #28282E;
		cursor: ew-resize;
	}

	.rc-slider-track {
		${position('', '', '', '0')};
		height: 2px;
		border-radius: 6px;
		background-color: #E64B3D;
		opacity: .4;
	}

	.rc-slider-handle {
		${size('5px', '4px')};
		position: absolute;
		margin-top: -1px;
		border-radius: 2px;
		border: solid 1px #000;
		background-color: #E64B3D;
		-ms-touch-action: pan-x;
			touch-action: pan-x;
		/* cursor: ew-resize; */

		&:focus {
			outline: none;
			cursor: ew-resize;
		}

		&:hover {
			${size('5px', '9px')};
			margin-top: -6px;
			cursor: ew-resize;
		}

		&:active {
			${size('5px', '9px')};
			margin-top: -6px;
			cursor: ew-resize;
		}
	}
`


export const Slider = styled.div `

`
