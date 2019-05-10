import React from 'react';
import { Link } from 'react-router-dom';

function ItemsList(props) {
  function routeToItem(ev, item) {
    ev.preventDefault();
    props.history.push(`/smurf-list/${smurf.id}`);
  }
  return (
    <div className="items-list-wrapper">
      {props.items.map(item => (
        <div
          onClick={ev => routeToItem(ev, item)}
          className="item-card"
          key={item.id}
        >
          <img
            className="item-list-image"
            src={item.imageUrl}
            alt={item.name}
          />
        </div>
      ))}
    </div>
  );
}

export default SmurfList;