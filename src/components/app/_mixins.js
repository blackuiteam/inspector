
export function size(wVal, hVal = null) {

	if(hVal === '') { hVal = wVal }

	return `
		width: 	${wVal};
		height: ${hVal}
	`
}

export function position(ptop = null, pright = null, pbottom = null, pleft = null) {
	return `
		position: absolute;
		top: 	${ptop};
		right: 	${pright};
		bottom: ${pbottom};
		left: 	${pleft}
	`
}

export function bgimage(bgUrl, bgRepeat, bgPosition, bgSize) {
	return `
		background-image: 		url('${bgUrl}');
		background-repeat: 		${bgRepeat};
		background-position: 	${bgPosition};
		background-size: 		${bgSize};
	`
}

// Example of LOOP FOR
// function createCSS() {
// 	let styles = '';

// 	for (let i = 0; i < 20; i += 1) {
// 	   styles += `
// 		 #loadingCheckCircleSVG-${i} {
// 		   animation: fill-to-white 5000ms;
// 		   animation-delay: ${i - 1.5}s;
// 		   fill: white;
// 		   opacity: 0;
// 		 }
// 	   `
// 	}

// 	return `${styles}`;
// }

// const Thing = styled.div`
// 	${createCSS()};
// `
