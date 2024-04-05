import React from "react";
import "./Category.css";
import smalLLogo from "../../images/smalll-logo.svg";
import phone from "../../images/Category-CellPhone.svg";
import computer from "../../images/Category-Computer.svg";
import smartwatch from "../../images/Category-SmartWatch.svg";
import camera from "../../images/Category-Camera.svg";
import headPhone from "../../images/Category-Headphone.svg";
import vector from "../../images/Vector.svg";

function Category() {
  return (
    <div className="category">
      <div className="container">
        <h6>
          <img src={smalLLogo} /> Categories
        </h6>
        <h2>Browse By Category</h2>
        <div className="items">
          <div className="item">
            <img src={phone} />
            <p className="item-text">Phones</p>
          </div>
          <div className="item">
            <img src={computer} />
            <p className="item-text">Computers</p>
          </div>
          <div className="item">
            <img src={smartwatch} />
            <p className="item-text">SmartWatch</p>
          </div>
          <div className="item">
            <img src={camera} />
            <p className="item-active">Camera</p>
          </div>
          <div className="item">
            <img src={headPhone} />
            <p className="item-text">HeadPhones</p>
          </div>
          <div className="item">
            <img src={vector} />
            <p className="item-text">Gaming</p>
          </div>
        </div>
        <div className="row-line"></div>
      </div>
    </div>
  );
}

export default Category;
