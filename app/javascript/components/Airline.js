import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";

function Airline(props) {
  const [airline, setAirline] = useState({});
  const [review, setReview] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const slug = props.match.params.slug;
    const url = `/api/v1/airlines/${slug}`;
    axios
      .get(url)
      .then((resp) => {
        setAirline(resp.data);
        setLoaded(true);
      })
      .catch((resp) => console.log(resp));
  }, []);
  return (
    <div className="wrapper">
      <div className="column">
        {loaded && <Header attributes={airline.data.attributes} />}
        <div className="reviews"></div>
      </div>
      <div className="column">
        <div className="review-form">Review goes here</div>
      </div>
    </div>
  );
}

export default Airline;
