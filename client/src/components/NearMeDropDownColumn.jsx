import React from 'react';

const NearMeDropDownColumn = (props) => {

  return (
    <div className="nav-near-dropdown-col" key={props.index}>
      <h3>{props.title}</h3>
      <ul>
        {props.links.map((link, index) => {
          return (
            <li key={index}>{link}</li>
          );
        })}
      </ul>
    </div>
  );

};

export default NearMeDropDownColumn;