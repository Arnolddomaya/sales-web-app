import { useQuery } from "@tanstack/react-query";
import { salesHttpClient } from "../SalesHttpClient";

export default function useProduct(id) {
  return useQuery(["products", id], () =>
    salesHttpClient.get(`/products/${id}`).then((response) => response.data),
  );
}
