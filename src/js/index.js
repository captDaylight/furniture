import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import thunk from 'redux-thunk';

import App from './containers/App';

import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

require('../scss/main.scss');

ReactDOM.render(
	(<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App} />
		</Router>
	</Provider>),
	document.getElementById('root'),
);
