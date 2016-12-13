import React from 'react';
import { Link } from 'react-router';

export default function Landing() {
	return (
		<div>
			<h1>Landing</h1>
			<div><Link to="/object/bench">Bench</Link></div>
			<div><Link to="/mat">Mat</Link></div>
		</div>
	);
}
