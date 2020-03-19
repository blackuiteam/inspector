import styled, { createGlobalStyle } from 'styled-components';
import { size, position, bgimage } from '../../app/mixins';

import ClipImg from '../../../img/clips/clip.png';
import ClipActiveImg from '../../../img/clips/clip_active.png';

import GeneratorImg from '../../../img/clips/generator.png';
import GeneratorActiveImg from '../../../img/clips/generator_active.png';

import TextImg from '../../../img/clips/text.png';
import TextActiveImg from '../../../img/clips/text_active.png';

import TransitionImg from '../../../img/clips/transition.png';
import TransitionActiveImg from '../../../img/clips/transition_active.png';

export const ClipsNavigation = styled.div `
	&:nth-child(1) {
		${size('182px', '119px', 'block')};
		${bgimage(ClipImg, 'no-repeat', 'center', '182px 119px')};
	}

	&:nth-child(2) {
		${size('182px', '62px', 'block')};
		${bgimage(TextImg, 'no-repeat', 'center', '182px 62px')};
		margin: 20px 0 0 0;
	}

	&:nth-child(3) {
		${size('182px', '62px', 'block')};
		${bgimage(GeneratorImg, 'no-repeat', 'center', '182px 62px')};
		margin: 20px 0 20px 0;
	}

	&:nth-child(4) {
		${size('180px', '60px', 'block')};
		${bgimage(TransitionImg, 'no-repeat', 'center', '180px 60px')};
	}

	&:hover, &.active {
		&:nth-child(1) {
			${bgimage(ClipActiveImg, 'no-repeat', '0 0', '182px 119px')};
		}
		&:nth-child(2) {
			${bgimage(TextActiveImg, 'no-repeat', 'center', '182px 62px')};
		}
		&:nth-child(3) {
			${bgimage(GeneratorActiveImg, 'no-repeat', 'center', '182px 62px')};
		}
		&:nth-child(4) {
			${bgimage(TransitionActiveImg, 'no-repeat', 'center', '180px 60px')};
		}
	}
`
