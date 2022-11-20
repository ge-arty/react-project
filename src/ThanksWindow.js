import ThanksIcon from "./images/Online payment_Two Color(1) 2.png";
export default function ThanksWindow() {
  return (
    <div className="thanks-window">
      <img className="thanks-icon" src={ThanksIcon} alt="icon" />
      <div className="rate">
        <p className="rate-text">You selected out of 5</p>
      </div>
      <h2 className="thanks-title">Thank You!</h2>
      <p className="thanks-text">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
