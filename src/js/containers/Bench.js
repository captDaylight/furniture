import React from 'react';
import THREE from 'three';

const benchWidth = 1;
const woodThickness = 0.1;

export default function Bench(props) {
	const { ui: { cubeWidth } } = props;
	const legSpacing = (cubeWidth / 2) - woodThickness;

	return (
		<group
			position={new THREE.Vector3(0, 0, 1)}
		>
			<mesh
				position={new THREE.Vector3(0, 1.5, 0)}
				receiveShadow
				castShadow
			>
				<boxGeometry
					width={cubeWidth}
					height={woodThickness}
					depth={benchWidth}
				/>
				<meshLambertMaterial
					color={0xFA6ACC}
				/>
			</mesh>

			<mesh
				position={new THREE.Vector3(legSpacing, 0.75, 0)}
				receiveShadow
				castShadow
			>
				<boxGeometry
					width={woodThickness * 2}
					height={1.5}
					depth={benchWidth}
				/>
				<meshLambertMaterial
					color={0xFA6ACC}
				/>
			</mesh>

			<mesh
				position={new THREE.Vector3(-legSpacing, 0.75, 0)}
				receiveShadow
				castShadow
			>
				<boxGeometry
					width={woodThickness * 2}
					height={1.5}
					depth={benchWidth}
				/>
				<meshLambertMaterial
					color={0xFA6ACC}
				/>
			</mesh>
		</group>
	);
}
