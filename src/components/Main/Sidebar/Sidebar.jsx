import React, { useState } from 'react'
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import "./Sidebar.css";
import Find from "./Find/Find";

const Sidebar = ({ handleChange, handleInputChange, query }) => {
    return (
        <>
            <section className="sidebar">
                <Find query={query} handleInputChange={handleInputChange} />
                <Category handleChange={handleChange} />
                <Price handleChange={handleChange} />
                <Colors handleChange={handleChange} />
            </section>
        </>
    );
};

export default Sidebar;
