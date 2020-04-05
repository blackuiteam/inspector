import styled, { createGlobalStyle } from 'styled-components';
import { size } from './_mixins';


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


