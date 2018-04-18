import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Provider as RebassProvider } from 'rebass';
import createBrowserHistory from 'history/createBrowserHistory';
// tslint:disable:no-import-side-effect
import './index.css';
// tslint:enable:no-import-side-effect
import { configureStore } from './configureStore';
import registerServiceWorker from './registerServiceWorker';
import App from './app/App';

const history = createBrowserHistory();
const store = configureStore(history);

declare global {
  interface Window {
    devToolsExtension: any;
  }
}

ReactDOM.render(
  <Provider store={store}>
    <RebassProvider id="provider">
      <App history={history} />
    </RebassProvider>
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
