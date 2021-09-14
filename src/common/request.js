/**
 * desc
 * @fileoverview
 *  1. request can be used directly, the interceptors are defined in the Request class
 *  2. Request also can be used, but need to use new statement first.
 *    const request = new Request({ requestSuccess<function>, requestFail<function>,responseSuccess<function>,responseFail<function> })
 */
import axios from 'axios';
class Requestor {
  constructor(options = {}) {
    this.HTTPService = axios.create({
      baseURL: process.env.REACT_APP_API_LINK || '/',
      timeout: 10000,
    });
    this.HTTPService.interceptors.request.use(
      options.requestSuccess || this.requestSuccess,
      options.requestFail || this.requestFail,
    );
    this.HTTPService.interceptors.response.use(
      options.responseSuccess || this.responseSuccess,
      options.responseFail || this.responseFail,
    );
    return this.HTTPService;
  }

  async requestSuccess(config) {
    return config;
  }

  requestFail(error) {
    return Promise.reject(error);
  }

  responseSuccess(response) {
    return response;
  }

  responseFail(error) {
    return Promise.reject(error);
  }
}
const request = new Requestor();
const requestStatus = {
  none: () => ({
    status: 'none',
    isloading: false,
    error: '',
  }),
  fetching: () => ({
    status: 'fetching',
    isloading: true,
    error: '',
  }),
  fulfilled: () => ({
    status: 'success',
    isloading: false,
    error: '',
  }),
  fail: (errMsg) => ({
    status: 'failure',
    isloading: false,
    error: errMsg,
  }),
};

export default request;
export { requestStatus };
