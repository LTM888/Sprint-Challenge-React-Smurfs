import React from 'react';
import { NavLink } from 'react-router-dom';

const SmurfNav = () => {
    return (
        <div className='nav'>
        <NavLink to='/' className='link'>
           <button><p>Come see the Village</p></button> 
        </NavLink>
        <NavLink to='/smurf-form' className='link'>
            <button><p>Add a Smurf</p></button>
        </NavLink>
        </div>
    );
};

export default SmurfNav;