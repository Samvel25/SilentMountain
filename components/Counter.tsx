import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

type endType = {
  end: number;
  decimals?: number;
  className?: string;
};

const CounterElement = ({ end, decimals, className }: endType) => {
  const [counted, setCounted] = useState(false);

  const handleVisibilityChange = (isVisible: boolean) => {
    if (isVisible && !counted) {
      setCounted(true);
    }
  };

  return (
    <CountUp
      end={counted ? end : 0}
      redraw={false}
      duration={4}
      decimals={decimals}>
      {({ countUpRef }) => (
        <VisibilitySensor onChange={handleVisibilityChange} delayedCall>
          <span className={className} ref={countUpRef} />
        </VisibilitySensor>
      )}
    </CountUp>
  );
};

export default CounterElement;
