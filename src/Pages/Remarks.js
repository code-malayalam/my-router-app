import React from 'react'
import { useOutletContext } from 'react-router-dom';
import './Remarks.css';

function Remarks() {
  const {remarks = []} = useOutletContext();

  return (
    <div className="remarks">
        {
            remarks.map((item) => {
                return <div key={item}>{item}</div>
            })
        }
    </div>
  )
}

export default Remarks;
