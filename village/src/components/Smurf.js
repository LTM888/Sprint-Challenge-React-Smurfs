import React from 'react';


function Smurf(props) {
  const smurf = props => {
    return (
      <div className='Smurf'>
        <h3>{props.name}</h3>
        <strong>{props.height} tall</strong>
        <p>{props.age} smurf year old</p>
        <button className='delete-button' onClick={ev => props.deleteSmurf(smurf, props.id)}>Delete</button>
      </div>
    );
  };
  
  Smurf.defaultProps = {
    name: '',
    height: '',
    age: ''
  };
}


export default Smurf;

