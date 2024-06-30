import React from 'react'
import './Button.css'

export default function Button(props) {
  const btn=props.primary?'primarybtn': 'secondarybtn';
  return (
    <div>
      <button className={btn}>
        <div>
        {props.icon}
        </div>
        <div>
        {props.text} 
        </div>
      </button>
    </div>
  )
}
