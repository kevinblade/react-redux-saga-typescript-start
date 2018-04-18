import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Provider as RebassProvider } from 'rebass';
import { createBrowserHistory } from 'history';
import App from './App';

import { configureStore } from '../configureStore';

const browserHistory = createBrowserHistory();
const store = configureStore(browserHistory);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <RebassProvider id="provider">
        <App history={browserHistory} />
      </RebassProvider>
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
