import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import thunk from 'redux-thunk';

// Page Components
import Landing from './components/Landing';
import MatInterface from './containers/MatInterface';

import reducers from './reducers';

if (module.hot) {
	module.hot.accept();
}

const store = createStore(reducers, applyMiddleware(thunk));

require('../scss/main.scss');

ReactDOM.render(
	(<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={MatInterface} />
		</Router>
	</Provider>),
	document.getElementById('root'),
);
