import React from "react";
import "./css/Transaction.css";

const logo = () => {
  return (
    <svg
      viewBox="0 0 496 512"
      className="bollIcon"
      height="14px"
      selectable="1"
      width="14px"
    >
      <path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path>
    </svg>
  );
};
const transLogo = () => {
  return (
    <div className="itemTitle">
      <svg
        enableBackground="new 0 0 32 32"
        height="32px"
        version="1.1"
        viewBox="0 0 32 32"
        width="32px"
        className="transIcon"
      >
        <g>
          <rect fill="none" height="32" width="32"></rect>
        </g>
        <g>
          <polygon points="16,2.001 16,10 2,10 2,22 16,22 16,30 30,16  "></polygon>
        </g>
      </svg>
    </div>
  );
};
const hashTitle = (tx) => {
  return (
    <div className="item">
      <div className="halfItem">
        <div className="itemTitle">Hash</div>
        <div className="itemLeft">
          <a href="/" className="esLink" opacity="1">
            {tx.hash}
          </a>
        </div>
      </div>
      <div className="halfItem">
        <div className="itemTitle"></div>
        <div className="itemLeft">
          <div className="divRight">
            <span className="des">{tx.time}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const inputItem = (inputObj) => {
  return (
    <div>
      {inputObj.prev_out ? (
        <div className="inputItem">
          <a href="/" className="esLink">
            {inputObj.prev_out.addr}
          </a>
          <div className="inputItemDes">
            <span className="des">{inputObj.prev_out.value} BTC</span>
            <a href="/" className="esLink">
              <div>{logo()}</div>
            </a>
          </div>
        </div>
      ) : (
        "COINBASE (Newly Generated Coins)"
      )}
    </div>
  );
};
const outItem = (outObj) => {
  return (
    <div className="outItem">
      <a href="/" className="esLink">
        {outObj.add || "OP_RETURN"}
      </a>
      <div className="outItemRight">
        <span className="des"> {outObj.value} BTC</span>
        <a href="/" className="esLink">
          <div>{logo()}</div>
        </a>
      </div>
    </div>
  );
};
const freeItem = (tx) => {
  return (
    <div className="item">
      <div className="halfItem">
        <div className="itemTitle">Free</div>
        <div className="itemLeft">
          <div className="freeContent">
            <span className="freeContentItem des">0.00020812 BTC</span>
            <div className="freeContentOther">
              <span className="freeContentItem des">
                (93.327 sat/B - 37.032 sat/WU - 223 bytes)
              </span>
              <span className="freeContentItem des">
                (147.603 sat/vByte - 141 virtual bytes)
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="halfItem">
        <div className="itemTitle"></div>
        <div className="itemLeft">
          <div className="divRight">
            <span className="des greenBg">2020-12-22 15:09</span>
          </div>
        </div>
      </div>
    </div>
  );
};
const Transaction = ({ tx }) => {
  return (
    <div className="content">
      {hashTitle(tx)}
      <div className="item">
        <div className="halfItem">
          <div className="itemTitle"></div>
          <div className="itemLeft">
            <div className="inputContent">
              <div className="inputContentDesc">
                {tx.inputs.map((inputObj) => inputItem(inputObj))}
              </div>
            </div>
          </div>
        </div>
        <div className="halfItem">
          {transLogo()}
          <div className="itemLeft">
            <div className="outContent">
              {tx.out.map((outObj) => outItem(outObj))}
            </div>
          </div>
        </div>
      </div>
      {freeItem()}
    </div>
  );
};

export default Transaction;
