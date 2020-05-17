import express from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import PayTM from '@jsdrome/paytm-express-middleware';

import config from '../config';
import home from './routes/home';
import login from './routes/login/';
import logout from './routes/logout';

import { getAppRedirectUrlParams } from './server.utils';

const {
  ports: {
    server : PORT,
  },
  props: {
    url,
  },
  secrets: {
    paytm: {
      merchantId: {
        // test: merchantIdTest,
        prod: merchantIdProd,
      },
      merchantKey: {
        // test: merchantKeyTest,
        prod: merchantKeyProd,
      },
    },
  },
} = config;

// eslint-disable-next-line no-undef
const port = process.env.PORT || PORT;
const app = express();

const payTM = PayTM({
  merchantId: merchantIdProd,
  merchantKey: merchantKeyProd,
  amount: 100,
  test: false,
  callbackUrl: `${url}/pay`,
  onSuccess: res => res.redirect('/' + getAppRedirectUrlParams('paytm', 'success', 'success')),
  onFailure: res => res.redirect('/' + getAppRedirectUrlParams('paytm', 'failure', 'error')),
});

app.use(cookieParser());
app.use(morgan('tiny'));
app.use('/', home);
app.use('/login', login);
app.use('/logout', logout);
app.use('/pay', payTM);
app.use(express.static('.'));

app.listen(port, () => console.log(`SERVER: Listening on port ${port}`));

export default app;
