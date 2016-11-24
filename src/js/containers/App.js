import React, { Component } from 'react';
import React3 from 'react-three-renderer';
import THREE from 'three';
import { connect } from 'react-redux';

import increment from '../actions/ui';

class App extends Component {
	constructor(props, context) {
		super(props, context);
		const { increment } = props;
		// construct the position vector here, because if we use 'new' within render,
		// React will think that things have changed when they have not.
		this.cameraPosition = new THREE.Vector3(0, 0, 5);

		this._onAnimate = () => {
			increment();
		};
	}

	render() {
		const width = window.innerWidth;
		const height = window.innerHeight;

		const { ui: { counter }, increment } = this.props;

		return (
			<div>
				<React3
					mainCamera="camera"
					width={width}
					height={height}
					onAnimate={this._onAnimate}
					alpha={true}
				>
					<scene>
						<orthographicCamera
							name="camera"
							left={-5}
							right={5}
							top={5}
							bottom={-5}
							near={0.5}
							far={500}
							position={this.cameraPosition}
						/>
						<mesh
							rotation={counter}
						>
							<boxGeometry
								width={2}
								height={1}
								depth={1}
							/>
							<meshBasicMaterial
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
	{ increment },
)(App);
