import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from '@material-ui/core/styles';
import JssProvider from 'react-jss/lib/JssProvider';

import routes from './routes';
import customTheme from './config/muiTheme';
import { generateClassName, jss } from './config/jssProvider';

import './styles/index.css';

const App = ({ store }) => (
  <Provider store={store}>
    <JssProvider jss={jss} generateClassName={generateClassName}>
      <MuiThemeProvider theme={customTheme}>{routes}</MuiThemeProvider>
    </JssProvider>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;
