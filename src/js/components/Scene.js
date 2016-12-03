import React from 'react';
import React3 from 'react-three-renderer';
import THREE from 'three';

import OrthoCamera from './OrthoCamera';
import Lights from './Lights';
import Textures from './Textures';
import FloorAndWall from './FloorAndWall';

function Scene(props) {
	const {
		windowWidth,
		windowHeight,
		cameraPosition,
		worldPosition,
		lightPosition,
		lightTarget,
		children,
	} = props;

	return (
		<React3
			mainCamera="camera"
			width={windowWidth}
			height={windowHeight}
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

				{children}

			</scene>
		</React3>
	);
}

Scene.propTypes = {
	windowWidth: React.PropTypes.number,
	windowHeight: React.PropTypes.number,
	cameraPosition: React.PropTypes.instanceOf(THREE.Vector3),
	worldPosition: React.PropTypes.instanceOf(THREE.Vector3),
	lightPosition: React.PropTypes.instanceOf(THREE.Vector3),
	lightTarget: React.PropTypes.instanceOf(THREE.Vector3),
	children: React.PropTypes.node,
};

export default Scene;
