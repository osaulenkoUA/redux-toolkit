import React from 'react';
import ReactDOM from 'react-dom';
import { store, persistor } from './redux/store.js';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

import App from './components/App.js';

ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>,
	document.querySelector('#root')
);
