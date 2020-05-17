import React, { useEffect } from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

const Main = () => {

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) jssStyles.parentElement.removeChild(jssStyles);
  }, []);

  return <BrowserRouter>
    <Routes />
  </BrowserRouter>;
}

hydrate(<Main />, document.getElementById('root'));
