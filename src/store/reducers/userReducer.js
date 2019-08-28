const initialState = {
  isLoading: false,
  user: {},
  error: ''
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'INIT_AUTH_REQUEST':
      return {
        ...state,
        isLoading: true,
        error: ''
      };
    case 'AUTH_ERROR':
      return {
        ...state,
        error: payload
      };
    case 'END_AUTH_REQUEST':
      return {
        ...state,
        isLoading: false,
      };
    case 'SIGNED_SUCCESS':
      return {
        ...state,
        error: '',
        user: { ...payload }
      };
    case 'LOG_OUT':
      return {
        ...state,
        user: {},
        error: '',
        isLoading: false,
      };
    default:
      return state;
  }
};  
