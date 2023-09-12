import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { withRow } from "../../hoc";
import { ProductCondition } from "../ProductCondition";
import { ProductImage } from "../ProductImage";
import { ProductPrice } from "../ProductPrice";
import { useProducts } from "../../hooks";
import { ProductDescription } from "../ProductDescription";

export default function HomePage() {
  const { products } = useProducts();

  const productColumns = [
    {
      field: "imageUrl",
      headerName: "Image produit",
      renderCell: withRow(ProductImage),
    },
    {
      field: "description",
      headerName: "Description",
      renderCell: withRow(ProductDescription),
      flex: 1,
    },
    {
      field: "price",
      headerName: "Prix",
      renderCell: withRow(ProductPrice),
    },
    {
      field: "condition",
      headerName: "Etat",
      renderCell: withRow(ProductCondition),
    },
    { field: "stock", headerName: "Stock" },
  ];

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={products}
        columns={productColumns}
        disableRowSelectionOnClick
        autoHeight
      />
    </Box>
  );
}
