import { useQuery } from "react-query";

export default function useProducts() {
  const basURl = import.meta.env.VITE_API_BASE_URL || "http://localhost:3001";

  return useQuery(["products"], () =>
    fetch(`${basURl}/products`).then((response) => response.json()),
  );
}
