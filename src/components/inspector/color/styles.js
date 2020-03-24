
import styled from 'styled-components';
import { size, bgimage } from '../../app/mixins';

import LutsDropdown from '../../../img/color/luts-dropdown.png';
import LutsSlider 	from '../../../img/color/luts-slider.png';

import PrimarieWheels from '../../../img/color/primaries-wheels.png';
import PrimarieCurves from '../../../img/color/primaries-curves.png';

import ColorCurves 	from '../../../img/color/color-curves.png';
import ColorSliders from '../../../img/color/color-sliders.png';

export const Row = styled.div `
	${size('100%', '30px')};
	padding: 0 16px 0 16px;

	&.header {
		border-top: 1px solid #000;
	}

	&.none { display: none; }
`
