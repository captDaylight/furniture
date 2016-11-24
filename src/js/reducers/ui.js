import THREE from 'three';

const initialState = {
	counter: new THREE.Euler(),
};

export default function todos(state = initialState, action) {
	switch (action.type) {
	case 'INCREMENT':
		return {
			...state,
			counter: new THREE.Euler(
				state.counter.x + 0.01,
				state.counter.y + 0.01,
				0,
			),
		};

	default:
		return state;
	}
}
