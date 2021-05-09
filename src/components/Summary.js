import React from 'react'
import {formatTime} from '../utils/util'
import SummaryItem from './SummaryItem'
const Summary = (props) => {
  const {transation} = props
  return (
    <div>
      {
      transation && 
      <>
        <SummaryItem label="Hash" text={transation.hash}/>
        <SummaryItem label="Timestamp" text= {transation.time ? formatTime(transation.time) : ''} />
        <SummaryItem label="Height" text={transation.height} />
        <SummaryItem label="Number of Transactions" text={transation.n_tx}/>
        <SummaryItem label="Merkle root" text={transation.mrkl_root} />
        <SummaryItem label="weight" text={transation.weight} />
      </>
      }
    </div>
  )
}
export default Summary