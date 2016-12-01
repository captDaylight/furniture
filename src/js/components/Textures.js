import React from 'react';
import THREE from 'three';

export default function Textures() {
	return (
		<resources>

			<texture
				resourceId="blueTexture"
				url="/images/blue.jpg"
				wrapS={THREE.RepeatWrapping}
				wrapT={THREE.RepeatWrapping}
				anisotropy={16}
				repeat={new THREE.Vector2(50, 50)}
			/>
			<meshLambertMaterial
				resourceId="blueMaterial"
				side={THREE.DoubleSide}
			>
				<textureResource
					resourceId="blueTexture"
				/>
			</meshLambertMaterial>

			<texture
				resourceId="blueTileTexture"
				url="/images/blueTile.png"
				wrapS={THREE.RepeatWrapping}
				wrapT={THREE.RepeatWrapping}
				anisotropy={16}
				repeat={new THREE.Vector2(100, 100)}
			/>
			<meshLambertMaterial
				resourceId="blueTileMaterial"
				side={THREE.DoubleSide}
			>
				<textureResource
					resourceId="blueTileTexture"
				/>
			</meshLambertMaterial>

			<texture
				resourceId="whiteTileTexture"
				url="i/mages/whiteTile.png"
				wrapS={THREE.RepeatWrapping}
				wrapT={THREE.RepeatWrapping}
				anisotropy={16}
				repeat={new THREE.Vector2(100, 100)}
			/>
			<meshLambertMaterial
				resourceId="whiteTileMaterial"
				side={THREE.DoubleSide}
			>
				<textureResource
					resourceId="whiteTileTexture"
				/>
			</meshLambertMaterial>

			<texture
				resourceId="bananasTexture"
				url="/images/bananas.jpg"
				wrapS={THREE.RepeatWrapping}
				wrapT={THREE.RepeatWrapping}
				anisotropy={16}
				repeat={new THREE.Vector2(5, 5)}
			/>
			<meshLambertMaterial
				resourceId="bananasMaterial"
				side={THREE.DoubleSide}
			>
				<textureResource
					resourceId="bananasTexture"
				/>
			</meshLambertMaterial>

		</resources>
	);
}
