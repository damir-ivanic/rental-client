import axios from "axios";
import { wrapPromise } from "./wrapPromise";

export function fetchReservations(from, to) {
  const prmise = axios.get(
    process.env.REACT_APP_API_ENDPOINT +
      `rentalobjects/overview?from=${from}&to=${to}`
  );
  return { reservations: wrapPromise(prmise) };
}
