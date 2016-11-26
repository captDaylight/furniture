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
				receiveShadow
			>
				<planeGeometry
					width={100}
					height={100}
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
				receiveShadow
			>
				<planeGeometry
					width={100}
					height={100}
				/>
				<meshLambertMaterial
					color={0x00DAFA}
				/>
			</mesh>
		</group>
	);
}
