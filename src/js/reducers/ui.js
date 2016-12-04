import { isEqual } from 'lodash';
console.log(isEqual);
const initialState = {
	benchLength: 1,
	legPositionX: 10,
	finalLegPosX: 10,
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
		console.log('SETTING FINAL POS', true);
		return {
			...state,
			finalLegPosX: action.legPositionX,
			animatingLeg: true,
		};

	case 'UPDATE_BENCH_LEG_POSITION':
		console.log('updating back ?????', isEqual(action.legPositionX, state.finalLegPosX));
		return {
			...state,
			legPositionX: action.legPositionX,
			animatingLeg: !isEqual(action.legPositionX, state.finalLegPosX),
		};

	default:
		return state;
	}
}
