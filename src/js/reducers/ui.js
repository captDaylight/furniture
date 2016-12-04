import { isEqual } from 'lodash';

const initialState = {
	benchLength: 1,
	finalBenchLength: 3,

	legPositionX: 5,
	finalLegPosX: 5,

	woodThickness: 0.1,

	animating: false,
	cubeHeight: 1,
};

export default function ui(state = initialState, action) {
	switch (action.type) {
	case 'INCREMENT':
		return {
			...state,
			[action.dimension]: state[action.dimension] + 1,
			finalLegPosX: ((state[action.dimension] + 1) / 2) - state.woodThickness,
			animating: true,
		};

	case 'DECREMENT':
		return {
			...state,
			[action.dimension]: state[action.dimension] - 1,
			finalLegPosX: ((state[action.dimension] - 1) / 2) - state.woodThickness,
			animating: true,
		};

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
