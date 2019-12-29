import React, { useRef } from "react";
import { useElementDimension } from "../../../hooks/useDimensions";

const VehicleReservations = ({ reservation }) => {
  const ref = useRef();
  const dimensions = useElementDimension(ref);

  console.log(reservation);

  return (
    <div style={{ border: "1px solid black" }} ref={ref}>
      {console.log(dimensions)}
      {reservation.name}
      {reservation.reservations.map(day => {
        return (
          <div key={day.id}>
            from: {day.from} <br />
            to:{day.to}
          </div>
        );
      })}
    </div>
  );
};

export default VehicleReservations;
