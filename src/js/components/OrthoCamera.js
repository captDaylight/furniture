import React from 'react';

export default function OrthoCamera(props) {
	return (
		<orthographicCamera
			name="camera"
			ref="camera"

			left={props.width / -200}
			right={props.width / 200}
			top={props.height / 200}
			bottom={props.height / -200}
			near={0.5}
			far={500}

			position={props.cameraPosition}
			lookAt={props.worldPosition}
		/>
	);
}
