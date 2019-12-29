import React, { Suspense } from "react";
import { fetchReservations } from "../../api/reservationsApi";
import ErrorBoundary from "../../components/Errors/ErrorBoundry";
import VehicleReservations from "../../components/Errors/vehiclereservations/VehicleReservations";

const periods = fetchReservations("2018-12-29", "2020-12-31");

export default function Dashboard() {
  const reservations = periods.reservations.read();

  return (
    <ErrorBoundary fallback={<h2>Could not fetch posts.</h2>}>
      <Suspense fallback={<h1>Loading...</h1>}>
        {reservations.data.map(reservation => {
          return (
            <VehicleReservations
              key={reservation.id}
              reservation={reservation}
            />
          );
        })}
      </Suspense>
    </ErrorBoundary>
  );
}
