export function increment(dimension) {
	return { type: 'INCREMENT', dimension };
}

export function decrement(dimension) {
	return { type: 'DECREMENT', dimension };
}

export function setFinalBenchLegPos(legPositionX) {
	return {
		type: 'SET_FINAL_BENCH_LEG_POS',
		legPositionX,
	};
}

export function updateBenchLegPos(legPositionX) {
	return {
		type: 'UPDATE_BENCH_LEG_POSITION',
		legPositionX,
	};
}
