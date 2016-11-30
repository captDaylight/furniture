import THREE from 'three';

const initialState = {
	windowWidth: 0,
	windowHeight: 0,
	cameraPosition: new THREE.Vector3(5, 5, 5),
	worldPosition: new THREE.Vector3(0, 0, 0),
	lightPosition: new THREE.Vector3(-4, 8, 5),
	lightTarget: new THREE.Vector3(0, 0, 0),
};

export default function scene(state = initialState, action) {
	switch (action.type) {
	case 'SET_WINDOW_SIZE':
		return {
			...state,
			windowHeight: action.height,
			windowWidth: action.width,
		};

	default:
		return state;
	}
}
