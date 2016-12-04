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
} from '../actions/ui';
import { setWindowSize as setWindowSizeAction } from '../actions/scene';

import Scene from '../components/Scene';

class Custom extends Component {
	constructor(props, context) {
		super(props, context);
		this.onAnimate = this.onAnimate.bind(this);

		const {
			setWindowSize,
			ui: { benchLength, woodThickness },
			setFinalBenchLegPos,
		} = props;


		setFinalBenchLegPos((benchLength / 2) - woodThickness);

		// set size of window on init
		setWindowSize(window.innerWidth, window.innerHeight);

		window.addEventListener('resize', () => {
			// listen for changes in size of window and set new size
			setWindowSize(window.innerWidth, window.innerHeight);
		});
	}

	onAnimate() {
		const {
			ui: { benchLength, animating, legPositionX, finalLegPosX },
			updateBenchLegPos,
		} = this.props;

		if (animating) {
			const diff = Math.abs(finalLegPosX - legPositionX);
			const change = diff * 0.1;
			let newPosition = finalLegPosX > legPositionX
				? legPositionX + change
				: legPositionX - change;

			if (
				newPosition > finalLegPosX - 0.02
				&& newPosition < finalLegPosX + 0.02
			) {
				newPosition = finalLegPosX;
			}

			updateBenchLegPos(newPosition);
		}
	};

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
			children,
		} = this.props;

		return (
			<div>
				<div>
					<div>
						<button onClick={() => decrement('benchLength')}>-</button>
							width: {ui.benchLength}
						<button onClick={() => increment('benchLength')}>+</button>
					</div>
					<div>
						<button onClick={() => decrement('cubeHeight')}>-</button>
							height: {ui.cubeHeight}
						<button onClick={() => increment('cubeHeight')}>+</button>
					</div>
				</div>

				<React3
					mainCamera="camera"
					width={windowWidth}
					height={windowHeight}
					onAnimate={this.onAnimate}
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
		benchLength: React.PropTypes.number,
		cubeHeight: React.PropTypes.number,
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
	setWindowSize: React.PropTypes.func,
	children: React.PropTypes.node,
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
	},
)(Custom);
