import { number } from "prop-types";
import { Price } from "../../ds/atoms";

export default function ProductPrice({ price }) {
  const priceComponent = <Price value={price} />;
  return priceComponent;
}

ProductPrice.propTypes = {
  price: number,
};
