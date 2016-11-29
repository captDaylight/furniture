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
		// construct the position vector here, because if we use 'new' within render,
		// React will think that things have changed when they have not.
		this.cameraPosition = new THREE.Vector3(5, 5, 5);
		this.worldPosition = new THREE.Vector3(0, 0, 0);

		this.lightPosition = new THREE.Vector3(-4, 8, 5);
		this.lightTarget = new THREE.Vector3(0, 0, 0);

		this.boxPosition = new THREE.Vector3(0, 2, 2);

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
			scene: { windowWidth, windowHeight },
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
							lightPosition={this.lightPosition}
							lightTarget={this.lightTarget}
						/>

						<Textures />

						<OrthoCamera
							width={windowWidth}
							height={windowHeight}
							cameraPosition={this.cameraPosition}
							worldPosition={this.worldPosition}
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
