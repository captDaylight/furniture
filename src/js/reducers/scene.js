import THREE from 'three';

const initialState = {
	windowWidth: 0,
	windowHeight: 0,
	cameraPosition: new THREE.Vector3(10, 10, 10),
	worldPosition: new THREE.Vector3(0, 0, 0),
	lightPosition: new THREE.Vector3(-4, 4, 5),
	lightTarget: new THREE.Vector3(0, 0, 0),
	units: 0, // 0 === imperial, 1 === metric
};

export default function scene(state = initialState, action) {
	switch (action.type) {
	case 'SET_WINDOW_SIZE':
		return {
			...state,
			windowHeight: action.height,
			windowWidth: action.width,
		};

	case 'SET_UNITS':
		return action.units === 0 || action.units === 1
		? {
			...state,
			units: action.units,
		}
		: state;

	default:
		return state;
	}
}
