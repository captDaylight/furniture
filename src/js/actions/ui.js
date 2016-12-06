export function increment() {
	return { type: 'INCREMENT_BENCH_LENGTH' };
}

export function decrement() {
	return { type: 'DECREMENT_BENCH_LENGTH' };
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
