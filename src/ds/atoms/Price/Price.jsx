import { number, oneOf } from "prop-types";
import { availableCurrencies } from "./availableCurrencies";

export default function Price({ value, currency = "EUR" }) {
  return new Intl.NumberFormat(window.navigator.language, {
    style: "currency",
    currency,
  }).format(value);
}

Price.propTypes = {
  value: number,
  currency: oneOf(availableCurrencies),
};
