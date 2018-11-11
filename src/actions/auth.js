import superagent from 'superagent';
import * as utils from '../lib/util';

/********************************************************************************
*         Synchronous                                                           *
********************************************************************************/

export const login = token => {
  return {
    type: 'LOGIN',
    payload: token,
  };
};

/********************************************************************************
*         Asynchronous                                                          *
********************************************************************************/