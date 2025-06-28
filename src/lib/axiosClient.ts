import axios from 'axios';
import { handleResponse } from '../utils/requests';

const rawAxiosCognitoClient = axios.create({
  baseURL: 'https://cognito-idp.eu-central-1.amazonaws.com',
  headers: {
    'content-type': 'application/x-amz-json-1.1',
  },
});

/* eslint-disable @typescript-eslint/no-explicit-any */
export const axiosCognitoClient = new Proxy(rawAxiosCognitoClient, {
  get(target, prop) {
    const original = (target as any)[prop];
    if (
      typeof original === 'function' &&
      ['get', 'post', 'put', 'delete', 'patch'].includes(prop as string)
    ) {
      return (...args: any[]) => handleResponse(original.apply(target, args));
    }
    return original;
  },
});
