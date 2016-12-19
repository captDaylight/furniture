import React from 'react';
import THREE from 'three';

function OrthoCamera(props) {
	const { width, height, cameraPosition, worldPosition } = props;

	return (
		<orthographicCamera
			name="camera"

			left={width / -250}
			right={width / 250}
			top={height / 250}
			bottom={height / -250}
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
