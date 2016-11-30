import React, { Component } from 'react';
import React3 from 'react-three-renderer';
import THREE from 'three';
import { connect } from 'react-redux';

import {
	rotate as rotateAction,
	increment as incrementAction,
	decrement as decrementAction,
} from '../actions/ui';
import { setWindowSize as setWindowSizeAction } from '../actions/scene';

import OrthoCamera from '../components/OrthoCamera';
import Lights from '../components/Lights';
import Textures from '../components/Textures';
import FloorAndWall from '../components/FloorAndWall';
import Bench from '../components/Bench';

class App extends Component {
	constructor(props, context) {
		super(props, context);
		const { setWindowSize } = props;

		// set size of window on init
		setWindowSize(window.innerWidth, window.innerHeight);

		window.addEventListener('resize', () => {
			// listen for changes in size of window and set new size
			setWindowSize(window.innerWidth, window.innerHeight);
		});

		this.onAnimate = () => {

		};
	}

	render() {
		const {
			ui: { cubeWidth, cubeHeight },
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
						<button onClick={() => decrement('cubeWidth')}>-</button>
							width: {cubeWidth}
						<button onClick={() => increment('cubeWidth')}>+</button>
					</div>
					<div>
						<button onClick={() => decrement('cubeHeight')}>-</button>
							height: {cubeHeight}
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

						<Bench
							length={cubeWidth}
						/>

						<FloorAndWall />

					</scene>
				</React3>
			</div>
		);
	}
}

App.propTypes = {
	ui: React.PropTypes.shape({
		cubeWidth: React.PropTypes.number,
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
};


export default connect(
	state => state,
	{
		rotate: rotateAction,
		increment: incrementAction,
		decrement: decrementAction,
		setWindowSize: setWindowSizeAction,
	},
)(App);
