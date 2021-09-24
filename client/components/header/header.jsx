import React from 'react';

const Header = ({ username, boxes, changeBoxes }) => {
  return (
    <div className="header">
      <div className="head">
        <h1>Semper Fictus</h1>
        <h3 className="account">{`Welcome ${username}`}</h3>
      </div>
      <div className="boxBar">
        <button className={boxes[0] ? 'box active' : 'box'} onClick={() => changeBoxes(0)}>INBOX</button>
        <button className={boxes[1] ? 'box active' : 'box'} onClick={() => changeBoxes(1)}>SENT</button>
        <button className={boxes[2] ? 'box active' : 'box'} onClick={() => changeBoxes(2)}>SPAM</button>
      </div>
    </div>
  )
};

export default Header;
