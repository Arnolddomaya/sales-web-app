import { rest } from "msw";
import { products } from "../fixtures/products";
import { defaultApiBaseUrl } from "../SalesHttpClient";

const fullUrl = (route) => `http:${defaultApiBaseUrl}${route}`;

export const handlers = [
  rest.get(fullUrl("/products"), (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(products));
  }),
];
