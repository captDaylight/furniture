import { combineReducers } from 'redux';
import ui from './ui';
import scene from './scene';

const rootReducer = combineReducers({
	ui,
	scene,
});

export default rootReducer;
