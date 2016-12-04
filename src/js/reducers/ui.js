import { isEqual } from 'lodash';

const initialState = {
	benchLength: 1,
	finalBenchLength: 1,
	woodThickness: 0.1,
	legPositionX: 5,
	finalLegPosX: 5,
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
		console.log('updating back ?????', isEqual(action.legPositionX, state.finalLegPosX));
		return {
			...state,
			legPositionX: action.legPositionX,
			animating: !isEqual(action.legPositionX, state.finalLegPosX),
		};

	default:
		return state;
	}
}
