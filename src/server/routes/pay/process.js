import express from 'express';

import { getFinalRedirectUrl, getEmailFromCookie, notify, slackNotify } from '../../../server.utils';
import { updateCredits } from '../../../firebase';

const router = express.Router();

router.post('/', async (req, res) => {
  // eslint-disable-next-line no-magic-numbers
  const { count = 1 } = req.query;
  const { STATUS, ORDERID, RESPMSG } = req.body;
  try {
    const email = getEmailFromCookie(req.cookies);
    if (!email) {
      notify('Error!', undefined, 'No email in cookie!', ORDERID, RESPMSG);
      slackNotify(':x: Error', undefined, 'Payment - No email in cookie!', ORDERID, RESPMSG);
      return res.redirect('/' + getFinalRedirectUrl('error', 'payment', 'technical'));
    }
    if (STATUS && STATUS === 'TXN_SUCCESS') {
      // eslint-disable-next-line no-magic-numbers
      if (!await updateCredits(email, +count)) {
        notify('Error!', undefined, 'Clue update failure!', email, ORDERID, RESPMSG);
        slackNotify(':x: Error', undefined, 'Clue update failure!', email, ORDERID, RESPMSG);
        return res.redirect('/' + getFinalRedirectUrl('error', 'payment', 'technical'));
      }
      notify('Money!', undefined, email, ORDERID, RESPMSG);
      slackNotify(':moneybag: Money', undefined, email, ORDERID, RESPMSG);
      return res.redirect('/' + getFinalRedirectUrl('success', 'payment', 'clue'));
    }
    notify('Error!', undefined, 'General Payment error!', ORDERID, RESPMSG);
    slackNotify(':x: Error', undefined, 'General Payment error!', ORDERID, RESPMSG);
    return res.redirect('/' + getFinalRedirectUrl('error', 'payment', 'clue'));
  } catch (err) {
    notify('Error!', undefined, 'Payment glitch!', ORDERID, RESPMSG, err);
    slackNotify(':x: Error', undefined, 'Payment glitch!', ORDERID, RESPMSG, err);
    return res.redirect('/' + getFinalRedirectUrl('error', 'payment', 'technical'));
  }
});

export default router;

/*
  if glitch
    notify and redirect failure
  if no email
    notify and redirect failure
  if TXN_SUCCESS
    if clue update failure
      notify and redirect failure
    else
      notify and redirect success
*/
