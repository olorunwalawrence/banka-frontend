const initialState = {
  success: '',
  accountDetails: {},
  error: '',
  noAccount: '',
  accounts: []
};

export default (state = initialState, {
  type,
  payload
}) => {
  switch (type) {
    case 'CREATE_ACCOUNT':
      return {
        ...state,
        ...payload,
      };
    case 'LOG_OUT':
      return {
        ...state,
        ...payload,
      };
    case 'CREATE_ACCOUNT_ERROR':
      return {
        ...state,
        ...payload,
      };
    case 'GET_ACCOUNT':
      return {
        ...state,
        ...payload,
      };
    case 'GET_ACCOUNT_ERROR':
      return {
        ...state,
        ...payload,
      };
    case 'LOG_OUT':
      return {
        ...state,
        success: '',
        error: '',
        accountDetails: {},
        accounts: [],
        noAccount: ''
      }
    default:
      return state;
  }
};
