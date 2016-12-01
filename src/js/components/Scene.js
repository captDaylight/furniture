import React from 'react';
import React3 from 'react-three-renderer';
import THREE from 'three';

import OrthoCamera from './OrthoCamera';
import Lights from './Lights';
import Textures from './Textures';
import FloorAndWall from './FloorAndWall';

export default function Scene(props) {
	const {
		windowWidth,
		windowHeight,
		cameraPosition,
		worldPosition,
		lightPosition,
		lightTarget,
		piece,
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

				{piece}

			</scene>
		</React3>
	);
}
