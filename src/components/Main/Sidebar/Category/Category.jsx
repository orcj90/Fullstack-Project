import React, { useState } from 'react'
import "./Category.css";
import Input from "../../../Input";

function Category({ handleChange }) {
    return (
        <div>
            <h2 className="sidebar-title">Category</h2>

            <div>
                <label className="sidebar-label-container">
                    <input onChange={handleChange} type="radio" value="" name="test" />
                    <span className="checkmark"></span>All
                </label>
                <Input
                    handleChange={handleChange}
                    value="Apple"
                    title="Apple"
                    name="test"
                />
                <Input
                    handleChange={handleChange}
                    value="Huawei"
                    title="Huawei"
                    name="test"
                />
                <Input
                    handleChange={handleChange}
                    value="Samsung"
                    title="Samsung"
                    name="test"
                />
                <Input
                    handleChange={handleChange}
                    value="Other"
                    title="Other"
                    name="test"
                />
            </div>
        </div>
    );
}

export default Category;
