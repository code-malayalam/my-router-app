import React from 'react'

import { useOutletContext } from 'react-router-dom';
import './Sports.css';
        
function Sports() {

  const {sports = {}} = useOutletContext();
  return (
    <div className="sports">
        {
            Object.keys(sports).map((item) => {
                return (
                    <div>
                        <div>
                            {item}
                        </div>
                        <div>
                            {sports[item] > 0 ? 'Position ' + sports[item] : 'Participated'}
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Sports;
