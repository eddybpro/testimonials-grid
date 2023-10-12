import PropTypes from "prop-types";
import "./Card.css";

function Card(props) {
  return (
    <div className="CardContainer">
      <div className="CardContainer-UserBox">
        <div className="CardContainer-UserBox-UserImgBox">
          <img src={props.img} alt="" />
        </div>
        <div className="CardContainer-UserBox-UserInfo">
          <h2 className="CardContainer-UserBox-UserInfo-UserName">
            {props.name}
          </h2>
          <p className="CardContainer-UserBox-UserInfo-Verified">
            {props.verified}
          </p>
        </div>
      </div>
      <p className="CardContainer-Desc">{props.desc}</p>
      <p className="CardContainer-Review">{props.review}</p>
    </div>
  );
}

Card.propTypes = {
  img: PropTypes.string,
  verified: PropTypes.string,
  name: PropTypes.string,
  desc: PropTypes.string,
  review: PropTypes.string,
};

export default Card;
