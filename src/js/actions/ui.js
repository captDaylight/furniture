export function rotate() {
	return { type: 'ROTATE' };
}

export function increment(dimension) {
	return { type: 'INCREMENT', dimension };
}

export function decrement(dimension) {
	return { type: 'DECREMENT', dimension };
}
