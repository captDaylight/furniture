import React, { Component } from 'react';
import THREE from 'three';
import { connect } from 'react-redux';

import {
	rotate as rotateAction,
	increment as incrementAction,
	decrement as decrementAction,
} from '../actions/ui';
import { setWindowSize as setWindowSizeAction } from '../actions/scene';

import Scene from '../components/Scene';

class Custom extends Component {
	constructor(props, context) {
		super(props, context);
		const { setWindowSize } = props;

		// set size of window on init
		setWindowSize(window.innerWidth, window.innerHeight);

		window.addEventListener('resize', () => {
			// listen for changes in size of window and set new size
			setWindowSize(window.innerWidth, window.innerHeight);
		});
	}

	render() {
		const {
			ui,
			scene: {
				windowWidth,
				windowHeight,
				cameraPosition,
				worldPosition,
				lightPosition,
				lightTarget,
			},
			increment,
			decrement,
			children,
		} = this.props;

		return (
			<div>
				<div>
					<div>
						<button onClick={() => decrement('benchLength')}>-</button>
							width: {ui.benchLength}
						<button onClick={() => increment('benchLength')}>+</button>
					</div>
					<div>
						<button onClick={() => decrement('cubeHeight')}>-</button>
							height: {ui.cubeHeight}
						<button onClick={() => increment('cubeHeight')}>+</button>
					</div>
				</div>

				<Scene
					windowWidth={windowWidth}
					windowHeight={windowHeight}
					cameraPosition={cameraPosition}
					worldPosition={worldPosition}
					lightPosition={lightPosition}
					lightTarget={lightTarget}
				>
					{React.cloneElement(children, { ui })}
				</Scene>
			</div>
		);
	}
}

Custom.propTypes = {
	ui: React.PropTypes.shape({
		benchLength: React.PropTypes.number,
		cubeHeight: React.PropTypes.number,
	}),
	scene: React.PropTypes.shape({
		windowWidth: React.PropTypes.number,
		windowHeight: React.PropTypes.number,
		cameraPosition: React.PropTypes.instanceOf(THREE.Vector3),
		worldPosition: React.PropTypes.instanceOf(THREE.Vector3),
		lightPosition: React.PropTypes.instanceOf(THREE.Vector3),
		lightTarget: React.PropTypes.instanceOf(THREE.Vector3),
	}),
	increment: React.PropTypes.func,
	decrement: React.PropTypes.func,
	setWindowSize: React.PropTypes.func,
	children: React.PropTypes.node,
};

export default connect(
	state => state,
	{
		rotate: rotateAction,
		increment: incrementAction,
		decrement: decrementAction,
		setWindowSize: setWindowSizeAction,
	},
)(Custom);
