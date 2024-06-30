import React from 'react'
import './Button.css'

export default function Button(props) {
  const btn=props.primary?'primarybtn': 'secondarybtn';
  const click=()=>{
    let txt=props.text;
    console.log("you clicked "+txt+" button");
  }
  return (
    <div>
      <button className={btn} onClick={click}>
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
