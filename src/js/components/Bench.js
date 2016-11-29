import React from 'react';
import THREE from 'three';

const benchWidth = 1;
const woodThickness = 0.1;

export default function Bench(props) {

	const { length } = props;
	const legSpacing = length/2 - woodThickness/2;

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
					width={length}
					height={0.1}
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
					width={0.1}
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
					width={0.1}
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
