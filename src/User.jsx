import React from 'react'
import { PropTypes } from "prop-types"
export const User = (props) => {
  return (
    <div className="card-container">
    <span className={props.status?"status online":"status offline"}>{props.status?"Online":"Offline"}</span>
    <img src={props.image} alt="ImageNot Found" className="image" height={110} width={110} />
    <h3>{props.name}</h3>
    <h3>{props.city}</h3>
    <p>{props.destination}</p>
    <div className="buttons">
          <button className="message">Message</button>
          <button className="follow outline">Following</button>
    </div>
    <div className="skills">
      <h4>Skills</h4>
        <ul>
            {props.skills.map((skill,index)=>(<li key={index}>{skill}</li>))}
        </ul>
    </div>

  </div>
  )
}

