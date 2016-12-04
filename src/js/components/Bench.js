import React from 'react';
import THREE from 'three';

const benchWidth = 1;
const woodThickness = 0.1;

function Bench(props) {
	const { ui: { benchLength, legPositionX } } = props;

	return (
		<group
			position={new THREE.Vector3(0, 0, 1)}
		>
			{
				// BENCH TOP
			}
			<mesh
				position={new THREE.Vector3(0, 1.5, 0)}
				receiveShadow
				castShadow
			>
				<boxGeometry
					width={benchLength}
					height={woodThickness}
					depth={benchWidth}
				/>
				<meshLambertMaterial
					color={0xFA6ACC}
				/>
			</mesh>

			{
				// RIGHT LEG
			}
			<mesh
				position={new THREE.Vector3(legPositionX, 0.75, 0)}
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

			{
				// LEFT LEG
			}
			<mesh
				position={new THREE.Vector3(-legPositionX, 0.75, 0)}
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

Bench.propTypes = {
	ui: React.PropTypes.shape({
		benchLength: React.PropTypes.number,
		legPositionX: React.PropTypes.number,
	}),
};

export default Bench;
