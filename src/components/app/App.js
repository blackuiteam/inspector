import React, { useState } from 'react';
import classNames from 'classnames';
import Inspector from './Inspector';
import { GlobalStyle } from './_app-styles';
function App() {

	return (
		<>
			<GlobalStyle/>
			<Inspector></Inspector>
		</>
	);
}

export default App;
