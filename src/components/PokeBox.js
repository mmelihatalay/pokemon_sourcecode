import { useState, useEffect } from "react";

const PokeBox = ({ poke, onPokeDetail }) => {
  const [image, setImage] = useState([]);
  const [type, setType] = useState([]);
  const [weight, setWeight] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(poke.url);
      const json = await response.json();
      setImage(json.sprites.front_default);
      setType(json.types);
      setWeight(json.weight);
    };

    fetchData();
  }, [poke.url]);

  const capitalize = (word) => {
    return word[0].toUpperCase() + word.slice(1);
  };

  return (
    <div className="card">
      <img src={image} alt={image} />
      <div className="container">
        <div className="row">
          <div className="col-12" style={{ paddingLeft: "15px" }}>
            <h4>
              <b>Name: </b> {capitalize(poke.name)}
            </h4>
            <h5>
              <b>{"Type :"} </b>
              {type.map((tip) => capitalize(tip.type.name)).join(" & ")}
            </h5>
          </div>
          <div className="row">
            <div className="col-8" style={{ paddingLeft: "15px" }}>
              <h5>
                <b>Weight: </b> {weight}
              </h5>
            </div>
            <div className="col-1 offset-2" style={{ paddingBottom: "15px" }}>
              <a
                className="btn btn-info"
                href={`/${poke.name}`}
                onClick={() => {
                  onPokeDetail(poke);
                }}
              >
                Info
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokeBox;
