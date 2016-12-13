import React, { Component } from 'react';
import THREE from 'three';
import { connect } from 'react-redux';

import { setWindowSize as setWindowSizeAction } from '../actions/scene';

function getNextAnimate(finalPos, newPos, speed) {
	const diff = Math.abs(finalPos - newPos);
	const change = diff * speed;
	let newPosition = finalPos > newPos
		? newPos + change
		: newPos - change;

	if (
		newPosition > finalPos - 0.02
		&& newPosition < finalPos + 0.02
	) {
		newPosition = finalPos;
	}
	return newPosition;
}

class MatInterface extends Component {
	constructor(props, context) {
		super(props, context);
		// this.onAnimate = this.onAnimate.bind(this);

		const {
			setWindowSize,
		} = props;

		// set size of window on init
		setWindowSize(window.innerWidth, window.innerHeight);

		this.onManualRenderTriggerCreated = (renderTrigger) => {
			// assign to variable to be able to reuse the trigger
			this.renderTrigger = renderTrigger;
		};

		window.addEventListener('resize', () => {
			// listen for changes in size of window and set new size
			setWindowSize(window.innerWidth, window.innerHeight);
			this.renderTrigger();
		});
	}

	// onAnimate() {
	// 	const {
	// 		ui: {
	// 			animating,
	// 			legPositionX,
	// 			finalLegPosX,
	// 			benchLength,
	// 			finalBenchLength,
	// 		},
	// 		updateBenchLegPos,
	// 		updateBenchLength,
	// 	} = this.props;
	//
	// 	if (animating) {
	// 		if (finalLegPosX !== legPositionX) {
	// 			updateBenchLegPos(getNextAnimate(finalLegPosX, legPositionX, 0.2));
	// 		}
	//
	// 		if (benchLength !== finalBenchLength) {
	// 			updateBenchLength(getNextAnimate(finalBenchLength, benchLength, 0.08));
	// 		}
	// 	}
	// }

	render() {
		return (
			<div>
				<div className="editor-container">
					Editor Container
				</div>
				<div className="scene-container">
					Scene Container
				</div>
			</div>
		);
	}
}

MatInterface.propTypes = {
	setWindowSize: React.PropTypes.func,
};

export default connect(
	state => state,
	{
		setWindowSize: setWindowSizeAction,
	},
)(MatInterface);
