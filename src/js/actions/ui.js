export function increment(dimension) {
	return { type: 'INCREMENT', dimension };
}

export function decrement(dimension) {
	return { type: 'DECREMENT', dimension };
}

export function setFinalBenchLegPos(legPosition) {
	return {
		type: 'SET_FINAL_BENCH_LEG_POS',
		legPosition,
	};
}

export function updateBenchLegPos(legPosition) {
	return {
		type: 'UPDATE_BENCH_LEG_POSITION',
		legPosition,
	};
}
