const initialState = {
	cubeWidth: 1,
	cubeHeight: 1,
};

export default function ui(state = initialState, action) {
	switch (action.type) {
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
