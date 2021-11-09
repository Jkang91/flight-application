import React from "react";

function Header(props) {
    const {name, image_url, avg_score} = props.attributes
  return (
    <div className="wrapper">
      <h1>
        <img src={image_url} alt={name}/>
        {name}
      </h1>
      <div>
        <div className="totalReviews"></div>
        <div className="starRating"></div>
        <div className="totalOutOf">3 out of 5</div>
      </div>
    </div>
  );
}

export default Header;
