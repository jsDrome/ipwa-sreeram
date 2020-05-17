import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App/App';

import theme from './theme';
import store from '../../store/store';

import Home from './Home/Home';

const Routes = () => <ReduxProvider store={store}>
  <ThemeProvider theme={theme}>
    <App>
      <Switch>
        <Route path="/post/:folder/:subfolder/:post" component={Home} />
        <Route path="/" component={Home} />
      </Switch>
    </App>
  </ThemeProvider>
</ReduxProvider>;

export default Routes;
