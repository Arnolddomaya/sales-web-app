import { withRow } from "../hoc";
import { ProductActions } from "./ProductActions";
import { ProductCondition } from "./ProductCondition";
import { ProductDescription } from "./ProductDescription";
import { ProductImage } from "./ProductImage";
import { ProductPrice } from "./ProductPrice";

export const productColumns = [
  {
    field: "imageUrl",
    headerName: "Image produit",
    sortable: false,
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
  {
    field: "actions",
    headerName: "Actions",
    sortable: false,
    renderCell: withRow(ProductActions),
  },
];
