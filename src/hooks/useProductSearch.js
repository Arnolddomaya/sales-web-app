import { useState } from "react";

export default function useProductSearch() {
  const [condition, setConditionState] = useState("");
  const setCondition = (event) => setConditionState(event.currentTarget.value);

  const [search, setSearchState] = useState("");
  const setSearch = (event) => setSearchState(event.currentTarget.value);

  return { condition, setCondition, search, setSearch };
}
