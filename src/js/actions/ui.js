// TODO remove dimension
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


export function setFinalBenchLength(benchLength) {
	return {
		type: 'SET_FINAL_BENCH_LENGTH',
		benchLength,
	};
}

export function updateBenchLength(benchLength) {
	return {
		type: 'UPDATE_BENCH_LENGTH',
		benchLength,
	};
}
