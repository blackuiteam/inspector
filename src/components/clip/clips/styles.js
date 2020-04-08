
import styled from 'styled-components';
import { size, bgimage } from '../../app/_mixins';

import ClipImg 				from '../../../img/clips/clip.png';
import ClipActiveImg 		from '../../../img/clips/clip_active.png';

import GeneratorImg 		from '../../../img/clips/generator.png';
import GeneratorActiveImg 	from '../../../img/clips/generator_active.png';

import TextImg 				from '../../../img/clips/text.png';
import TextActiveImg 		from '../../../img/clips/text_active.png';

import TransitionImg 		from '../../../img/clips/transition.png';
import TransitionActiveImg 	from '../../../img/clips/transition_active.png';

function ClipNavFunc() {
	const clipsProps = [
		{ id: 1, image: ClipImg, 		active: ClipActiveImg, 			sizeW: '182px', sizeH: '119px', bgPos: 'center', bgSize: '182px 119px' },
		{ id: 2, image: TextImg, 		active: TextActiveImg, 			sizeW: '182px', sizeH: '62px', 	bgPos: 'center', bgSize: '182px 62px' },
		{ id: 3, image: GeneratorImg, 	active: GeneratorActiveImg, 	sizeW: '182px', sizeH: '62px', 	bgPos: 'center', bgSize: '182px 62px' },
		{ id: 4, image: TransitionImg, 	active: TransitionActiveImg, 	sizeW: '180px', sizeH: '60px', 	bgPos: 'center', bgSize: '180px 60px' },
	];

	let clipStyle = '';

	clipsProps.forEach(clip => {
		clipStyle += `
			&:nth-child(${clip.id}) {
				${size(clip.sizeW, clip.sizeH, 'block')};
				${bgimage(clip.image, 'no-repeat', clip.bgPos, clip.bgSize)};

				&:hover, &.active {
					background-image: url(${clip.active});
				}
			}
		`
	})

	return `${clipStyle}`;
}

export const ClipsNavigation = styled.div `
	${ClipNavFunc()};
`
