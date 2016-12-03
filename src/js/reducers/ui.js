import { isEqual } from 'lodash';

const initialState = {
	benchLength: 1,

	legPos: [0, 0, 0],
	finalLegPos: [0, 0, 0],
	animatingLeg: false,

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

	case 'SET_FINAL_BENCH_LEG_POS':
		return {
			...state,
			finalLegPos: [...action.finalLegPos],
			animatingLeg: true,
		};

	case 'UPDATE_BENCH_LEG_POSITION':
		return {
			...state,
			legPosition: [...action.legPosition],
			animatingLeg: isEqual(action.legPosition, state.finalLegPos),
		};

	default:
		return state;
	}
}
