import { Price } from ".";

export default {
  title: "ds/atoms/Price",
  component: Price,
  args: {
    value: 42.99,
  },
};

export const WithDefaultCurrency = {};

export const WithUSD = {
  args: {
    currency: "USD",
  },
};

export const NegativeValue = {
  args: {
    value: -12.3,
  },
};
