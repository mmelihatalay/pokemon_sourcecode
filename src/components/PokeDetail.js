import React from "react";

const PokeDetail = ({ pokeInf }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3" style={{ paddingTop: "10px" }}>
          <a className="btn btn-danger" href="/">
            Back
          </a>
        </div>
        <div className="col-6">
          <h1 style={{ textAlign: "center" }}>Info for a selected Pokemon</h1>
          <h2>{console.log(pokeInf)}</h2>
        </div>
      </div>
    </div>
  );
};

export default PokeDetail;
