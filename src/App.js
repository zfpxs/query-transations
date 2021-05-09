import React, { useState, useReducer, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Transtion from "./components/Transaction";
import Search from "./components/Search";
import Summary from "./components/Summary";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import useNetdata from './utils/useNetData'

const App = () => {
  const [word, setWord] = useState('00000000000000000007878ec04bb2b2e12317804810f4c26033585b3f81ffaa')
  const [state, dispatch] = useNetdata(word)
  
  const onPageChange = (page) => {
    const { transation, total, pageSize } = state;
    let list = [];
    if (total > (page - 1) * pageSize) {
      list = transation.tx.slice((page - 1) * pageSize, page * pageSize);
    }
    dispatch({
      type: "SEARCH_TRANSTION_PAGE",
      payload: { page: page, list: list },
    });
  };

  const {
    transation,
    errorMessage,
    loading,
    page,
    pageSize,
    total,
    list,
  } = state;
  return (
    <div className="App">
      <Header title="Blockchain.com" />
      <Search search={(val)=>setWord(val)} />
      <Summary transation={transation} />
      <div className="transtion">
        {loading  ? (
          <span>loading...</span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          list &&
          list.map((tx, index) => <Transtion key={`${tx.hash}` + index} tx={tx} 
          />
          )
        )}
      </div>
      {total > 0 ? (
        <div className="paginationDiv">
          <Pagination
            onChange={onPageChange}
            total={total}
            current={page}
            pageSize={pageSize}
          />
        </div>
      ) : null}
    </div>
  );
};
export default App;
