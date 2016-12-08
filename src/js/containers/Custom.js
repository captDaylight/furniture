import React, { Component } from 'react';
import THREE from 'three';
import { connect } from 'react-redux';

import React3 from 'react-three-renderer';

import OrthoCamera from '../components/OrthoCamera';
import Lights from '../components/Lights';
import Textures from '../components/Textures';
import FloorAndWall from '../components/FloorAndWall';
import Bench from '../components/Bench';

import {
	rotate as rotateAction,
	increment as incrementAction,
	decrement as decrementAction,
	setFinalBenchLegPos as setFinalBenchLegPosAction,
	updateBenchLegPos as updateBenchLegPosAction,
	setFinalBenchLength as setFinalBenchLengthAction,
	updateBenchLength as updateBenchLengthAction,
} from '../actions/ui';
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

class Custom extends Component {
	constructor(props, context) {
		super(props, context);
		this.onAnimate = this.onAnimate.bind(this);

		const {
			setWindowSize,
			ui: { finalBenchLength, woodThickness },
			setFinalBenchLegPos,
		} = props;

		setFinalBenchLegPos((finalBenchLength / 2) - woodThickness);

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

	onAnimate() {
		const {
			ui: {
				animating,
				legPositionX,
				finalLegPosX,
				benchLength,
				finalBenchLength,
			},
			updateBenchLegPos,
			updateBenchLength,
		} = this.props;

		if (animating) {
			if (finalLegPosX !== legPositionX) {
				updateBenchLegPos(getNextAnimate(finalLegPosX, legPositionX, 0.2));
			}

			if (benchLength !== finalBenchLength) {
				updateBenchLength(getNextAnimate(finalBenchLength, benchLength, 0.08));
			}
		}
	}

	render() {
		const {
			ui,
			scene: {
				windowWidth,
				windowHeight,
				cameraPosition,
				worldPosition,
				lightPosition,
				lightTarget,
			},
			increment,
			decrement,
		} = this.props;

		return (
			<div>
				<div>
					<div>
						<button onClick={() => decrement()}>-</button>
							width: {ui.finalBenchLength}
						<button onClick={() => increment()}>+</button>
					</div>
				</div>

				<React3
					mainCamera="camera"
					width={windowWidth}
					height={windowHeight}
					onAnimate={this.onAnimate}
					forceManualRender={!ui.animating}
					onManualRenderTriggerCreated={this.onManualRenderTriggerCreated}
					alpha
					antialias
					gammaInput
					gammaOutput
					shadowMapEnabled
				>
					<scene>

						<Lights
							lightPosition={lightPosition}
							lightTarget={lightTarget}
						/>

						<Textures />

						<OrthoCamera
							width={windowWidth}
							height={windowHeight}
							cameraPosition={cameraPosition}
							worldPosition={worldPosition}
						/>

						<FloorAndWall />

						<Bench {...this.props} />

					</scene>
				</React3>
			</div>
		);
	}
}

Custom.propTypes = {
	ui: React.PropTypes.shape({
		finalBenchLength: React.PropTypes.number,
	}),
	scene: React.PropTypes.shape({
		windowWidth: React.PropTypes.number,
		windowHeight: React.PropTypes.number,
		cameraPosition: React.PropTypes.instanceOf(THREE.Vector3),
		worldPosition: React.PropTypes.instanceOf(THREE.Vector3),
		lightPosition: React.PropTypes.instanceOf(THREE.Vector3),
		lightTarget: React.PropTypes.instanceOf(THREE.Vector3),
	}),
	increment: React.PropTypes.func,
	decrement: React.PropTypes.func,
	updateBenchLegPos: React.PropTypes.func,
	updateBenchLength: React.PropTypes.func,
	setFinalBenchLegPos: React.PropTypes.func,
	setWindowSize: React.PropTypes.func,
};

export default connect(
	state => state,
	{
		rotate: rotateAction,
		increment: incrementAction,
		decrement: decrementAction,
		setWindowSize: setWindowSizeAction,
		setFinalBenchLegPos: setFinalBenchLegPosAction,
		updateBenchLegPos: updateBenchLegPosAction,
		setFinalBenchLength: setFinalBenchLengthAction,
		updateBenchLength: updateBenchLengthAction,
	},
)(Custom);
