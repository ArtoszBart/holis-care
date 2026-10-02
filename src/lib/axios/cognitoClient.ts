import axios from 'axios';
import { createProxiedAxios } from './requests';

const rawAxiosCognitoClient = axios.create({
  baseURL: 'https://cognito-idp.eu-central-1.amazonaws.com',
  timeout: 5000,
  headers: {
    'content-type': 'application/x-amz-json-1.1',
  },
});

export const axiosCognitoClient = createProxiedAxios(rawAxiosCognitoClient);
