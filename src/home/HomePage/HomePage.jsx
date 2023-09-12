import {
  FormControl,
  FormControlLabel,
  FormLabel,
  LinearProgress,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { withRow } from "../../hoc";
import { ProductCondition } from "../ProductCondition";
import { ProductImage } from "../ProductImage";
import { ProductPrice } from "../ProductPrice";
import { useCondition, useProducts } from "../../hooks";
import { ProductDescription } from "../ProductDescription";

const conditionTypes = [
  {
    label: "Toutes",
    value: "",
  },
  {
    label: "neuf",
    value: "new",
  },
  {
    label: "Occasion",
    value: "used",
  },
];

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
export default function HomePage() {
  const [condition, setCondition] = useCondition();
  const { isLoading, error, data: products } = useProducts({ condition });

  if (isLoading) return;
  if (error) return "Error!";
  return (
    <>
      <Stack direction="row" justifyContent="center" spacing={6} sx={{ my: 4 }}>
        <TextField label="Recherche" sx={{ width: 400 }} />
        <FormControl>
          <FormLabel id="condition-label">Condition</FormLabel>
          <RadioGroup
            row
            aria-labelledby="condition-label"
            defaultValue="female"
            name="radio-buttons-group"
            value={condition}
            onChange={setCondition}
          >
            {conditionTypes.map(({ label, value }) => (
              <FormControlLabel
                key={value}
                value={value}
                control={<Radio />}
                label={label}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Stack>
      {isLoading ? (
        <LinearProgress />
      ) : (
        <DataGrid
          rows={products}
          columns={productColumns}
          disableRowSelectionOnClick
          autoHeight
        />
      )}
    </>
  );
}
