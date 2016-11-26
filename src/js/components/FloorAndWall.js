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
					width={25}
					height={25}
				/>
				<materialResource
					resourceId="blueTileMaterial"
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
					width={25}
					height={25}
				/>
				<materialResource
					resourceId="blueTileMaterial"
				/>
			</mesh>
		</group>
	);
}
