
import {useReducer, useEffect } from "react";
import reducer from "../store/reducer"
const TRANSATION_API_URL = "https://blockchain.info/rawblock/";

const initialState = {
  loading: true,
  transation: [],
  errorMessage: null,
  page: 1,
  pageSize: 5,
  total: 0,
  list: [],
};

const useNetData = (word) => {
  
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    (async () => {
      dispatch({
        type: "SEARCH_TRANSTION_REQUEST",
      });
      const { pageSize } = state;
      const response = await fetch(
        `${TRANSATION_API_URL}${word}`
      );
     
      const jsonResponse = await response.json();
      const total = jsonResponse.tx ? jsonResponse.tx.length : 0;

      let list = [];
      if (total > 0) {
        list = jsonResponse.tx.slice(0, pageSize);
      }
      if (jsonResponse.tx) {
        dispatch({
          type: "SEARCH_TRANSTION_SUCCESS",
          payload: {
            total: total,
            list: list,
            transation: jsonResponse,
          },
        });
      } else {
        dispatch({
            type: "SEARCH_TRANSTION_FAILURE",
            error: "没有数据"
        });
      }
    })();
  }, [word]);
  return [state, dispatch]
}

export default useNetData