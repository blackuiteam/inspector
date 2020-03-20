
import styled, { createGlobalStyle } from 'styled-components';
import { size, position, bgimage } from './mixins';


// NAVIGATION INSPECTOR
import AudioImg 	from '../../img/nav/audio.png';
import ColorImg 	from '../../img/nav/color.png';
import EffectsImg 	from '../../img/nav/effects.png';
import FileImg 		from '../../img/nav/file.png';
import SizingImg 	from '../../img/nav/sizing.png';
import VideoImg 	from '../../img/nav/video.png';

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

import Arrow from '../../img/icons/arrow.png';
import CursorImg from '../../img/common/cursor.png';

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

import iconEq				from '../../img/icons/eq.png';
import iconEqActive 		from '../../img/icons/eq_active.png';
import iconEqHover 			from '../../img/icons/eq_active_hover.png';

import iconPreview			from '../../img/icons/preview.png';
import iconPreviewActive 	from '../../img/icons/preview_active.png';
import iconPreviewHover 	from '../../img/icons/preview_active_hover.png';

import iconTransform		from '../../img/icons/transform.png';
import iconTransformActive 	from '../../img/icons/transform_active.png';
import iconTransformHover 	from '../../img/icons/transform_active_hover.png';

export const GlobalStyle = createGlobalStyle `
	* {
		box-sizing: border-box;
		font-family: "Open Sans";
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
`

export const AppContainer = styled.div `
	${size('700px', 'auto', 'table')};
	${position('10%', '', '', '50%')};
	transform: translate(-50%, -10%);
`

export const Wrapper = styled.div `
	${size('336px', 'auto', 'block')};
	${position('0', '0', '', '')};
	border: 1px solid #000;
	color: #fff;
`

export const ClipsWrapper = styled.div `
	${size('336px', 'auto', 'block')};
	${position('0', '', '', '0')};
`

export const Header = styled.div `
	${size('100%', '24px')};
	display: flex;
	align-items: center;
	padding: 0 0 0 10px;
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

export const NavTextItem = styled.div `
	${size('46px', '100%')};
	position: relative;
	display: block;
	float: left;

	:nth-child(1) {
		${bgimage(TextImg,'no-repeat', '9px 0', '30px 32px')}
	};

	:nth-child(2) {
		${bgimage(FrameImg,'no-repeat', '9px 0', '30px 32px')}
	};

	:nth-child(3) {
		${bgimage(StyleImg,'no-repeat', '9px 0', '30px 32px')}
	};

	:nth-child(4) {
		${bgimage(SettingsImg,'no-repeat', '9px 0', '30px 32px')}
	};

	:nth-child(5) {
		${bgimage(TextVideoImg,'no-repeat', '13px 9px', '21px 14px')}
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

export const NavItem = styled.div `
	${size('46px', '100%')};
	position: relative;
	display: block;
	float: left;

	&.active {
		box-shadow: inset 0px -2px 0px 0px rgba(230,75,61,1);

		span {
			color: #fff;
		}
	}

	:nth-child(1) {
		${bgimage(VideoImg,'no-repeat', '13px 9px', '21px 14px')}
	};

	:nth-child(2) {
		${bgimage(SizingImg,'no-repeat', '13px 9px', '21px 14px')}
	};

	:nth-child(3) {
		${bgimage(AudioImg,'no-repeat', '15px 9px', '15px 16px')}
	}

	:nth-child(4) {
		${bgimage(ColorImg,'no-repeat', '15px 9px', '17px 17px')}
	}

	:nth-child(5) {
		${bgimage(EffectsImg,'no-repeat', '15px 8px', '19px 20px')}
	}

	:nth-child(6) {
		${bgimage(FileImg,'no-repeat', '12px 9px', '25px 16px')}
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
	${size('22px', '14px')};
	position: relative;
	float: left;
	margin: 9px 0 0 0;
	background-color: #171717;
	border-radius: 30px;

	&::before {
		${size('8px', '8px')};
		${position('3px', '', '', '11px')};
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
	margin: 8px 0 0 10px;
	font-size: 11px;
	color: #fff;
`

export const ToggleTools = styled.div `
	${size('23px', '20px')};
	display: block;
	float: right;
	margin: 5px 0 0 0;

	&.ic-audio {
		${ bgimage(iconAudio,'no-repeat', 'center', '23px 23px') }

		&.active {
			${ bgimage(iconAudioActive,'no-repeat', 'center', '23px 23px') }
		}

		&:hover {
			${ bgimage(iconAudioHover,'no-repeat', 'center', '23px 23px') }
		}
	}

	&.ic-auto {
		${ bgimage(iconAuto,'no-repeat', 'center', '23px 23px') }

		&.active {
			${ bgimage(iconAutoActive,'no-repeat', 'center', '23px 23px') }
		}

		&:hover {
			${ bgimage(iconAutoHover,'no-repeat', 'center', '23px 23px') }
		}
	}

	&.ic-col-science {
		${ bgimage(iconColScienceActive,'no-repeat', 'center', '23px 23px') }

		&.active {
			${ bgimage(iconColScience,'no-repeat', 'center', '23px 23px') }
		}

		&:hover {
			${ bgimage(iconColScienceHover,'no-repeat', 'center', '23px 23px') }
		}
	}

	&.ic-colorwheel {
		${ bgimage(iconColorWheelsActive,'no-repeat', 'center', '23px 23px') }

		&.active {
			${ bgimage(iconColorWheels,'no-repeat', 'center', '23px 23px') }
		}

		&:hover {
			${ bgimage(iconColorWheelsHover,'no-repeat', 'center', '23px 23px') }
		}
	}

	&.ic-controls {
		${ bgimage(iconControlsActive,'no-repeat', 'center', '23px 23px') }

		&.active {
			${ bgimage(iconControls,'no-repeat', 'center', '23px 23px') }
		}

		&:hover {
			${ bgimage(iconControlsHover,'no-repeat', 'center', '23px 23px') }
		}
	}

	&.ic-crop {
		${ bgimage(iconCropActive,'no-repeat', 'center', '23px 23px') }

		&.active {
			${ bgimage(iconCrop,'no-repeat', 'center', '23px 23px') }
		}

		&:hover {
			${ bgimage(iconCropHover,'no-repeat', 'center', '23px 23px') }
		}
	}

	&.ic-curves {
		${ bgimage(iconCurvesActive,'no-repeat', 'center', '23px 23px') }

		&.active {
			${ bgimage(iconCurves,'no-repeat', 'center', '23px 23px') }
		}

		&:hover {
			${ bgimage(iconCurvesHover,'no-repeat', 'center', '23px 23px') }
		}
	}

	&.ic-delete {
		${ bgimage(iconDelete,'no-repeat', 'center', '23px 23px') }

		&.active {
			${ bgimage(iconDeleteActive,'no-repeat', 'center', '23px 23px') }
		}

		&:hover {
			${ bgimage(iconDeleteHover,'no-repeat', 'center', '23px 23px') }
		}
	}

	&.ic-eq {
		${ bgimage(iconEqActive,'no-repeat', 'center', '23px 23px') }

		&.active {
			${ bgimage(iconEq,'no-repeat', 'center', '23px 23px') }
		}

		&:hover {
			${ bgimage(iconEqHover,'no-repeat', 'center', '23px 23px') }
		}
	}

	&.ic-preview {
		${ bgimage(iconPreviewActive,'no-repeat', 'center', '23px 23px') }

		&.active {
			${ bgimage(iconPreview,'no-repeat', 'center', '23px 23px') }
		}

		&:hover {
			${ bgimage(iconPreviewHover,'no-repeat', 'center', '23px 23px') }
		}
	}

	&.ic-transform {
		${ bgimage(iconTransformActive,'no-repeat', 'center', '23px 23px') }

		&.active {
			${ bgimage(iconTransform,'no-repeat', 'center', '23px 23px') }
		}

		&:hover {
			${ bgimage(iconTransformHover,'no-repeat', 'center', '23px 23px') }
		}
	}
`

export const Row = styled.div `
	${size('100%', '30px')};
	padding: 0 16px 0 16px;

	&.header {
		border-top: 1px solid #000;
	}
`

export const MiniContainer = styled.div `
	${size('calc(100% - 40px)', 'auto', 'block')};
	margin: 0 auto;
	border-bottom: 1px solid #1B1B1E;

	&.first {
		border-top: 1px solid #1B1B1E;
	}

	&.no-border {
		border: none;
		margin: 0 auto 9px auto;
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

export const RcSlider = styled.div `
	/* border: 1px solid red; */

	.rc-slider {
		${size('100%', '4px', '')};
		position: relative;
		margin: 10px 0 10px 0;
		padding: 0;
		border: 1px solid #000;
		border-bottom-left-radius: 2px;
		border-bottom-right-radius: 2px;
		-ms-touch-action: none;
			touch-action: none;
		box-sizing: border-box;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);

		&.white {
			.rc-slider-handle {
				background-color: #fff;
			}

			.rc-slider-track {
				background-color: transparent;
			}
		}
	}

	.rc-slider-rail {
		${size('100%', '2px')};
		position: absolute;
		background-color: #28282E;
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
		/* cursor: pointer;
		cursor: -webkit-grab;
		cursor: grab; */
	}

	.rc-slider-handle-dragging.rc-slider-handle-dragging.rc-slider-handle-dragging {
		/* border-color: #57c5f7;
		box-shadow: 0 0 0 5px #96dbfa; */
	}

	.rc-slider-handle:focus {
		outline: none;
	}

	.rc-slider-handle-click-focused:focus {
		/* border-color: #96dbfa;
		box-shadow: unset; */
	}

	.rc-slider-handle:hover {
		${size('5px', '9px')};
		margin-top: -6px;
		cursor: url('https://files.slack.com/files-pri/T02909Q0K-F010DH0JXSR/cursor.png') 11 12, auto;
		/* border-color: #57c5f7; */
	}

	.rc-slider-handle:active {
		${size('5px', '9px')};
		margin-top: -6px;
		cursor: url('https://files.slack.com/files-pri/T02909Q0K-F010DH0JXSR/cursor.png') 11 12, auto;
		/* cursor: grabbing; */
		/* border-color: #57c5f7;
		box-shadow: 0 0 5px #57c5f7; */
	}

	.rc-slider-mark {
		${position('18px', '', '', '0')};
		width: 100%;
		font-size: 12px;
	}

	.rc-slider-mark-text {
		position: absolute;
		display: inline-block;
		vertical-align: middle;
		text-align: center;
		color: #999;
		cursor: pointer;
	}

	.rc-slider-mark-text-active {
		color: #666;
	}

	.rc-slider-step {
		${size('100%', '4px')};
		position: absolute;
		background: transparent;
	}

`
