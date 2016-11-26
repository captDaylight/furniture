import React, { Component } from 'react';
import React3 from 'react-three-renderer';
import THREE from 'three';
import { connect } from 'react-redux';

import {
	rotate as rotateAction,
	increment as incrementAction,
	decrement as decrementAction,
} from '../actions/ui';

import FloorAndWall from '../components/FloorAndWall';
import Lights from '../components/Lights';

class App extends Component {
	constructor(props, context) {
		super(props, context);
		const { rotate } = props;
		// construct the position vector here, because if we use 'new' within render,
		// React will think that things have changed when they have not.
		this.cameraPosition = new THREE.Vector3(5, 5, 5);
		this.worldPosition = new THREE.Vector3(0, 0, 0);

		const d = 20;

		this.lightPosition = new THREE.Vector3(0, 5, 5);
		this.lightTarget = new THREE.Vector3(0, 0, 0);

		this.boxPosition = new THREE.Vector3(0, 2, 2);

		this.onAnimate = () => {
			rotate();
		};
	}

	render() {
		const width = window.innerWidth;
		const height = window.innerHeight;
		const {
			ui: { rotation, cubeWidth, cubeHeight },
			rotate,
			increment,
			decrement
		} = this.props;

		// TODO get rid of this
		const d = 20;

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
					width={width}
					height={height}
					onAnimate={this.onAnimate}
					alpha
					antialias
					gammaInput
					gammaOutput
					shadowMapEnabled
				>
					<scene>
						<orthographicCamera
							name="camera"
							ref="camera"

							left={width / -200}
							right={width / 200}
							top={height / 200}
							bottom={height / -200}
							near={0.5}
							far={500}

							position={this.cameraPosition}
							lookAt={this.worldPosition}

						/>
						<Lights
							lightPosition={this.lightPosition}
							lightTarget={this.lightTarget}
						/>

						<mesh
							rotation={rotation}
							position={this.boxPosition}
							castShadow
							receiveShadow
						>
							<boxGeometry
								width={cubeWidth}
								height={cubeHeight}
								depth={1}
							/>
							<meshLambertMaterial
								color={0xFA6ACC}
							/>
						</mesh>

						<FloorAndWall />
					</scene>
				</React3>
			</div>
		);
	}
}

export default connect(
	state => state,
	{
		rotate: rotateAction,
		increment: incrementAction,
		decrement: decrementAction,
	},
)(App);
