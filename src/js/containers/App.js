import React, { Component } from 'react';
import React3 from 'react-three-renderer';
import THREE from 'three';
import { connect } from 'react-redux';

import {
	rotate as rotateAction,
	increment as incrementAction,
	decrement as decrementAction,
} from '../actions/ui';

class App extends Component {
	constructor(props, context) {
		super(props, context);
		const { rotate } = props;
		// construct the position vector here, because if we use 'new' within render,
		// React will think that things have changed when they have not.
		this.cameraPosition = new THREE.Vector3(0, 0, 5);

		const d = 20;

		this.lightPosition = new THREE.Vector3(d, d, d);
		this.lightTarget = new THREE.Vector3(0, 0, 0);

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
				>
					<scene>
						<orthographicCamera
							name="camera"

							left={width / -200}
							right={width / 200}
							top={height / 200}
							bottom={height / -200}
							near={0.5}
							far={500}
							position={this.cameraPosition}
						/>
						<ambientLight
							color={0x666666}
						/>
						<directionalLight
							color={0xffffff}
							intensity={1.75}

							castShadow

							shadowMapWidth={1024}
							shadowMapHeight={1024}

							shadowCameraLeft={-d}
							shadowCameraRight={d}
							shadowCameraTop={d}
							shadowCameraBottom={-d}

							shadowCameraFar={3 * d}
							shadowCameraNear={d}

							position={this.lightPosition}
							lookAt={this.lightTarget}
						/>
						<mesh
							rotation={rotation}
						>
							<boxGeometry
								width={cubeWidth}
								height={cubeHeight}
								depth={1}
							/>
							<meshPhongMaterial
								color={0xFA6ACC}
							/>
						</mesh>
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
