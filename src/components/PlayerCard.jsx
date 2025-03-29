import React from "react";

const playercard = ({imgUrl, name, club, age, country, jersy }) => {
  return (
    <>
      <div className="card" style={{ width: "18rem"}}>
        <img src={imgUrl} className="card-image-top" alt="player img"/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h5 className="card-title">{club}</h5>
          <h5 className="card-title">{jersy}</h5>
          <h5 className="card-title">{age}</h5>
          <h5 className="card-title">{country}</h5>
          <a href="#" className="btn btn-primary">
            Read More...
          </a>
        </div>
      </div>
    </>
  );
};

export default playercard;
