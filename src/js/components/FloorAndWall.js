import React from 'react';
import THREE from 'three';

const quarterRotation = Math.PI / 2;
const floorRotation = new THREE.Euler(-quarterRotation, 0, 0);

export default function FloorAndWall() {
	return (
		<group>
			{
				// wall geometry
			}
			<mesh
				castShadow
				receiveShadow
			>
				<planeGeometry
					width={5}
					height={5}
				/>
				<meshLambertMaterial
					color={0xFADA00}
				/>
			</mesh>

			{
				// ground geometry
			}
			<mesh
				rotation={floorRotation}
				castShadow
				receiveShadow
			>
				<planeGeometry
					width={5}
					height={5}
				/>
				<meshLambertMaterial
					color={0x00DAFA}
				/>
			</mesh>
		</group>
	);
}
