import React from 'react';
import THREE from 'three';

// TODO get rid of this
const d = 20;

export default function Lights(props) {
	return (
		<group>
			<mesh
				position={props.lightPosition}
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
				color={0xCCCCCC}
			/>
			<directionalLight
				color={0xffffff}
				intensity={1.50}

				castShadow

				shadowMapWidth={2048}
				shadowMapHeight={2048}

				shadowCameraLeft={-d}
				shadowCameraRight={d}
				shadowCameraTop={d}
				shadowCameraBottom={-d}

				shadowCameraFar={3 * d}
				shadowCameraNear={0.01}

				shadowDarkness={0.5}

				position={props.lightPosition}
				lookAt={props.lightTarget}
			/>
		</group>
	);
}
