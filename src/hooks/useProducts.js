import { useQuery } from "@tanstack/react-query";
import { salesHttpClient } from "../SalesHttpClient";

export default function useProducts({ condition, search }) {
  const searchParams = new URLSearchParams();

  if (condition) searchParams.append("condition", condition);
  if (search) searchParams.append("q", search);

  return useQuery(["products", { condition, search }], () =>
    salesHttpClient
      .get(`/products?${searchParams}`)
      .then((response) => response.data),
  );
}
