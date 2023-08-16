import React, { useState } from 'react'
import "./Find.css";

const Find = ({ handleInputChange, query }) => {
    return (
        <div className="nav-container">
            <input
                className="search-input"
                type="text"
                onChange={handleInputChange}
                value={query}
                placeholder="Search Phone"
            />
        </div>
    );
};

export default Find;
