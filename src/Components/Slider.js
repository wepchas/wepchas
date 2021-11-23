import React, { useState, useEffect } from "react";
import "../Styles/Slider.css";

export default function Slider(props) {
  const [left, setLeft] = useState(0);
  const [isHovered, setHovered] = useState();

  const { data, interval, interval_time, arrows, slices, details } = props;

  let summaryName = (nam) => {
    if (nam) {
      if (nam.length > 50) {
        return nam.substring(0, 50) + " ...";
      } else {
        return nam;
      }
    }
  };

  let leftHandler = () => {
    if (left <= (data.length - slices) * (-100 / slices)) {
      setLeft(0);
    } else {
      setLeft(left + -100 / slices);
    }
  };

  let rightHandler = () => {
    if (left >= -100 / slices + 1) {
      setLeft((data.length - slices) * (-100 / slices));
    } else {
      setLeft(left - -100 / slices);
    }
  };

  useEffect(() => {
    let my_interval = null;
    if (interval) {
      if (!isHovered) {
        my_interval = setInterval(() => {
          leftHandler();
        }, interval_time);
      }
      return () => clearInterval(my_interval);
    }
  }, [left, isHovered]);

  return (
    <div className="Father-Slider position-relative">
      <div
        className="Slider"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className="gallery d-flex"
          style={{
            width: `calc(100% * ${data.length / slices})`,
            left: `${left}%`,
          }}
        >
          {data.map((item, index) => (
            <div
              className="slide mini"
              style={{ width: `calc(100% / ${data.length})` }}
              key={index}
            >
              <div className="internal">
                <div className="img-part">
                  <img src={item.image.url} alt={item.image.alt} />
                </div>
                {details && (
                  <>
                    <h6 className="m-title">{summaryName(item.name)}</h6>
                    <p className="m-des mb-0">{item.description}</p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {arrows && (
        <>
          <div
            className="right-icon click-icon mini-arrows mini-right"
            onClick={rightHandler}
          ></div>
          <div
            className="left-icon click-icon mini-arrows mini-left"
            onClick={leftHandler}
          ></div>
        </>
      )}
    </div>
  );
}
