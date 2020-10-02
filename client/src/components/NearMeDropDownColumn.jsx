import React from 'react';

const NearMeDropDownColumn = (props) => {

  return (
    <div className="nav-near-dropdown-col" key={props.index}>
      <h3>{props.title}</h3>
      {props.links.map((link, index) => {
        return (
          <li key={index}>{link}</li>
        );
      })}
    </div>
  );

};

export default NearMeDropDownColumn;