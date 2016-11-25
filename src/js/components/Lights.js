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

				shadowCameraFar={1000}
				shadowCameraNear={d}

				position={props.lightPosition}
				lookAt={props.lightTarget}
			/>
		</group>
	);
}
