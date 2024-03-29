import React from 'react';
import './ContextBox.css';

const ContextBox = ({ info }) => {
  if (!info) return;
  return (
    <div className="context-box">
      {info.name && <div className="context-name">{info.name}</div>}
      {info.description && <div className="context-description">{info.description}</div>}
      {(info.attack || info.defense || info.range) && (
        <div className="context-stats">
          {info.attack && <span>Attack: {info.attack}</span>}
          {info.defense && <span>Defense: {info.defense}</span>}
          {info.range && <span>Range: {info.range}</span>}
        </div>
      )}
      <img className="context-image-placeholder" src={"img/"+info.image}/>
      {info.cost && <div className="context-cost">Cost: {info.cost}</div>}
    </div>
  );
};

export default ContextBox;
