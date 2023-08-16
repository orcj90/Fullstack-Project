import React, { useState } from 'react'
import Button from "../Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Apple" title="Apple" />
          <Button onClickHandler={handleClick} value="Huawei" title="Huawei" />
          <Button onClickHandler={handleClick} value="Other" title="Other" />
          <Button onClickHandler={handleClick} value="Other" title="Other" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
