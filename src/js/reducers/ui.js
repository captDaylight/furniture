import THREE from 'three';

const initialState = {
	rotation: new THREE.Euler(),
	cubeWidth: 1,
	cubeHeight: 1,
};

export default function todos(state = initialState, action) {
	switch (action.type) {
	case 'ROTATE':
		return {
			...state,
			rotation: new THREE.Euler(
				state.rotation.x + 0.01,
				state.rotation.y + 0.01,
				0,
			),
		};

	case 'INCREMENT':
		return {
			...state,
			[action.dimension]: state[action.dimension] + 1,
		};

	case 'DECREMENT':
		return {
			...state,
			[action.dimension]: state[action.dimension] - 1,
		};

	default:
		return state;
	}
}
