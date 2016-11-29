import React from 'react';
import THREE from 'three';

function OrthoCamera(props) {
	const { width, height, cameraPosition, worldPosition } = props;

	return (
		<orthographicCamera
			name="camera"

			left={width / -200}
			right={width / 200}
			top={height / 200}
			bottom={height / -200}
			near={0.5}
			far={500}

			position={cameraPosition}
			lookAt={worldPosition}
		/>
	);
}

OrthoCamera.propTypes = {
	width: React.PropTypes.number,
	height: React.PropTypes.number,
	cameraPosition: React.PropTypes.instanceOf(THREE.Vector3),
	worldPosition: React.PropTypes.instanceOf(THREE.Vector3),
};

export default OrthoCamera;
