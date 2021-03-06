import React from 'react';
import THREE from 'three';

// TODO get rid of this
const d = 20;

function Lights(props) {
	const { lightPosition, lightTarget } = props;

	return (
		<group>
			<mesh
				position={lightPosition}
			>
				<boxGeometry
					width={0.1}
					height={0.1}
					depth={0.1}
				/>
				<meshLambertMaterial
					color={0x000000}
				/>
			</mesh>

			<ambientLight
				color={0xFFFFFF}
			/>
			<directionalLight
				color={0xAAAAAA}
				intensity={1.50}

				castShadow

				shadowMapWidth={4096}
				shadowMapHeight={4096}

				shadowCameraLeft={-d}
				shadowCameraRight={d}
				shadowCameraTop={d}
				shadowCameraBottom={-d}

				shadowCameraFar={3 * d}
				shadowCameraNear={0.01}

				position={lightPosition}
				lookAt={lightTarget}
			/>
		</group>
	);
}

Lights.propTypes = {
	lightPosition: React.PropTypes.instanceOf(THREE.Vector3),
	lightTarget: React.PropTypes.instanceOf(THREE.Vector3),
};

export default Lights;
