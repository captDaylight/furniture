const initialState = {
	windowWidth: 0,
	windowHeight: 0,
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
