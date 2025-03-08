import React from "react";
import "./Card.css";
const Card = (props) => {
  let cardImage =
    "https://www.bing.com/images/search?view=detailV2&ccid=eOhotWUU&id=BAB66C4B433B420A904D19BED9BEB09876627158&thid=OIP.eOhotWUUq5XWVG6az-2HeQHaEw&mediaurl=https%3a%2f%2fstatic1.bigstockphoto.com%2f5%2f3%2f3%2flarge1500%2f335448619.jpg&exph=964&expw=1500&q=coding+images&simid=608045925652720164&FORM=IRPRST&ck=C76857C5DB575AB2E56E13AE7BECBB7B&selectedIndex=13&itb=0";
  return (
    <div className="card">
      <img src={cardImage} alt="card" style={{
        width: "100%",
        height: "100px",
        objectFit: "cover",
      }} />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
};

export default Card;
