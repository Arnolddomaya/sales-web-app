import { useQuery } from "@tanstack/react-query";

export default function useProducts({ condition, search }) {
  const basURl = import.meta.env.VITE_API_BASE_URL || "http://localhost:3001";

  const searchParams = new URLSearchParams();

  if (condition) searchParams.append("condition", condition);
  if (search) searchParams.append("q", search);

  return useQuery(["products", { condition, search }], () =>
    fetch(`${basURl}/products?${searchParams}`).then((response) =>
      response.json(),
    ),
  );
}
