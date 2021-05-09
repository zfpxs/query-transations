import React from 'react'

const SummaryItem = (props) => {
  const {label, text} = props
  return (
    <div className="kiseLw">
          <p>
            {label}
          </p>
           <p>
            {text}
           </p>
    </div>
  )
}

export default SummaryItem