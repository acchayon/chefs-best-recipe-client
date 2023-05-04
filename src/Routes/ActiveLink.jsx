import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to, children}) => {
    return (
        <NavLink
        to={to}
        className={({ isActive }) => isActive ? "text-white p-2 me-2  bg-primary text-decoration-none s" : ""}>
            {children}
      </NavLink>
    );
};

export default ActiveLink;