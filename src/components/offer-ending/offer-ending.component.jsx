import { useEffect, useState } from "react";
import Service from "../../service/service";
import "./offer-ending.style.scss";
let timeInterval;
function calculateTime() {
  const millisecToSec = 1000;
  const upcomingTime = Date.parse(new Date(Service.deal.time));
  const currentTime = Date.parse(new Date());
  const timeRemaining = (upcomingTime - currentTime) / 1000;
  if (timeRemaining < 0) clearInterval(timeInterval);
  const seconds = Math.floor(timeRemaining % 60);
  const minutes = Math.floor((timeRemaining / 60) % 60);
  const hours = Math.floor((timeRemaining / 60 / 60) % 24);
  const days = Math.floor(timeRemaining / 60 / 60 / 24);
  return { seconds, minutes, hours, days };
}
const OfferEnding = () => {
  const [time, setTime] = useState({});

  function timeLeft() {
    const updatedTime = calculateTime();
    setTime({ ...time, ...updatedTime });
  }
  useEffect(() => {
    setInterval(timeLeft, 1000);
  }, []);
  return (
    <div className="offer-ending my-5">
      <div className="container">
        <div className="d-md-flex align-items-center">
          <div className="offer-img">
            <img src={Service.deal.image} alt="" className="me-5" />
          </div>{" "}
          <div className="offer-ending-content">
            <h4 className="display-4 text-center">Deal of the day</h4>
            <div className="offer-time d-flex justify-content-between text-center my-4">
              <div>
                <span className="d-block">{time.days}</span>
                Days
              </div>
              <div>
                <span className="d-block">{time.hours}</span>
                Hours
              </div>
              <div>
                <span className="d-block">{time.minutes}</span>
                Minutes
              </div>
              <div>
                <span className="d-block">{time.seconds}</span>
                Seconds
              </div>
            </div>
            <div className="text-center mt-4">
              <button className="btn btn-secondary">Shop now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferEnding;
