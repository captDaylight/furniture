import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import thunk from 'redux-thunk';

// Page Components
import Landing from './components/Landing';
import Custom from './containers/Custom';

import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

require('../scss/main.scss');

ReactDOM.render(
	(<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={Landing} />
			<Route path="object" component={Custom}>
				<Route path="bench" />
			</Route>
		</Router>
	</Provider>),
	document.getElementById('root'),
);
