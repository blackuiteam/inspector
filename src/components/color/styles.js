
import styled from 'styled-components';
import { size, bgimage } from '../app/mixins';

import LutsDropdown from '../../img/color/luts-dropdown.png';
import LutsSlider 	from '../../img/color/luts-slider.png';

import PrimarieWheels from '../../img/color/primaries-wheels.png';
import PrimarieCurves from '../../img/color/primaries-curves.png';

import ColorCurves 	from '../../img/color/color-curves.png';
import ColorSliders from '../../img/color/color-sliders.png';

export const Row = styled.div `
	${size('100%', '30px')};
	padding: 0 16px 0 16px;

	&.header {
		border-top: 1px solid #000;
	}

	&.luts {
		${bgimage(LutsDropdown,'no-repeat', 'center', '294px 23px')}
	}

	&.slider {
		${bgimage(LutsSlider,'no-repeat', '20px 4px', '294px 18px')}
		height: 32px;
		border-bottom: 1px solid #000;
	}

	&.primaries-wheels {
		${bgimage(PrimarieWheels,'no-repeat', '20px 6px', '289px 161px')}
		height: 171px;
	}

	&.primaries-curves {
		${bgimage(PrimarieCurves,'no-repeat', '16px 7px', '294px 156px')}
		height: 172px;
	}

	&.color-curves {
		${bgimage(ColorCurves,'no-repeat', '16px 8px', '305px 185px')}
		height: 200px;
	}

	&.color-sliders {
		${bgimage(ColorSliders,'no-repeat', '16px 4px', '294px 278px')}
		height: 292px;
	}

	&.none { display: none; }
`
