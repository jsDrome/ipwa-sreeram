import express from 'express';
import { getCurrentTimeStamp } from '../../../server.utils';
import { genChecksum } from './checksum';

const router = express.Router();

import config from '../../../config';

const {
  secrets: {
    paytm: {
      merchantId: {
        test: merchantIdTest,
        prod: merchantIdProd,
      },
      merchantKey: {
        test: merchantKeyTest,
        prod: merchantKeyProd,
      },
    },
  },
} = config;

const isTestUser = process.env.NODE_ENV === 'production';
const TXN_AMOUNT = 100;
const PAYTM_TEST = {
  MID: merchantIdTest,
  WEBSITE: 'WEBSTAGING',
  ORDER_ID: getCurrentTimeStamp(),
  CUST_ID: `-`,
  MOBILE_NO: '-',
  EMAIL: '-',
  INDUSTRY_TYPE_ID: 'Retail',
  CHANNEL_ID: 'WEB',
  TXN_AMOUNT,
  CALLBACK_URL: isTestUser ? `http://localhost:5001/pay/process` : `https://sreeram.app/pay/process`,
};

const PAYTM_PROD = {
  ...PAYTM_TEST,
  MID: merchantIdProd,
  WEBSITE: 'DEFAULT',
};

const key = isTestUser ? merchantKeyTest : merchantKeyProd;
const endPoint = isTestUser ? 'https://securegw-stage.paytm.in/order/process' : 'https://securegw.paytm.in/order/process';
const params = isTestUser ? PAYTM_TEST : PAYTM_PROD;

router.get('/', async (req, res) => {
  genChecksum(params, key, cs => {
    // eslint-disable-next-line no-magic-numbers
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(template(endPoint, params, cs));
    res.end();
  });
});

const template = (endPoint, attrs, checksumHash) => {
  let inputs = '';
  for (let attr in attrs) inputs += `<input type="hidden" name="${attr}" value="${attrs[attr]}"/>`;

  return `<html>
    <form method="post" action="${endPoint}" name="paytm_form">
    ${inputs}
    <input type="hidden" name="CHECKSUMHASH" value="${checksumHash}"/>
    </form>
    <script>document.paytm_form.submit();</script>
  </html>`;
};

export default router;
