const initialState = {
	minBenchLength: 1,
	maxBenchLength: 8,
	woodThickness: 0.1,

	benchLength: 1,
	finalBenchLength: 3,

	legPositionX: 5,
	finalLegPosX: 5,

	animating: false,
};

export default function ui(state = initialState, action) {
	switch (action.type) {
	case 'INCREMENT_BENCH_LENGTH':
		return state.finalBenchLength + 1 <= state.maxBenchLength
			? {
				...state,
				finalBenchLength: state.finalBenchLength + 1,
				finalLegPosX: ((state.finalBenchLength + 1) / 2) - state.woodThickness,
				animating: true,
			}
			: { ...state };

	case 'DECREMENT_BENCH_LENGTH':
		return state.finalBenchLength - 1 >= state.minBenchLength
		? {
			...state,
			finalBenchLength: state.finalBenchLength - 1,
			finalLegPosX: ((state.finalBenchLength - 1) / 2) - state.woodThickness,
			animating: true,
		}
		: { ...state };

	case 'SET_FINAL_BENCH_LEG_POS':
		return {
			...state,
			finalLegPosX: action.legPositionX,
			animating: true,
		};

	case 'UPDATE_BENCH_LEG_POSITION':
		return {
			...state,
			legPositionX: action.legPositionX,
			animating: action.legPositionX !== state.finalLegPosX,
		};

	case 'SET_FINAL_BENCH_LENGTH':
		return {
			...state,
			finalBenchLength: action.benchLength,
			animating: true,
		};

	case 'UPDATE_BENCH_LENGTH':
		return {
			...state,
			benchLength: action.benchLength,
			animating: action.benchLength !== state.finalBenchLength,
		};

	default:
		return state;
	}
}
