const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_TRANSTION_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };
    case "SEARCH_TRANSTION_SUCCESS":
      return {
        ...state,
        loading: false,
        transation: action.payload.transation,
        page: 1,
        total: action.payload.total,
        list: action.payload.list,
      };
    case "SEARCH_TRANSTION_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error,
      };
    case "SEARCH_TRANSTION_PAGE":
      return {
        ...state,
        page: action.payload.page,
        list: action.payload.list,
      };
    default:
      return state;
  }
};

export default reducer