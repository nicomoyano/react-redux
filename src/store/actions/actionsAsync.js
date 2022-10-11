//Async action types
export const API_CALL_REQUEST = 'API_CALL_REQUEST';
export const API_CALL_SUCCESS = 'API_CALL_SUCCESS';
export const API_CALL_FAILURE = 'API_CALL_FAILURE';

export const httpRequest = (method, url, data) => {
  return {
    type: API_CALL_REQUEST,
    payload: {
      request: {
        method: method,
        url: url,
        data: data,
      },
      successAction: API_CALL_SUCCESS,
      failureAction: API_CALL_FAILURE,
    },
  };
};
