import { LinearProgress } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { FavoritesContext } from "@/contexts";
import { useProductsByIds } from "../../hooks";
import { productColumns } from "../productColums";

export default function FavoritesPage() {
  const { favorites } = FavoritesContext.useContext();
  const {
    isLoading,
    error,
    data: favoriteProducts,
  } = useProductsByIds({ ids: favorites });

  if (error) throw "Error";
  return (
    <>
      {isLoading ? (
        <LinearProgress />
      ) : (
        <DataGrid
          rows={favoriteProducts}
          columns={productColumns}
          disableRowSelectionOnClick
          autoHeight
        />
      )}
    </>
  );
}
