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
import { useProductSearch, useProducts } from "../../hooks";
import { productColumns } from "../../product/productColums";

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

export default function HomePage() {
  const { condition, setCondition, search, setSearch } = useProductSearch();
  const {
    isLoading,
    error,
    data: products,
  } = useProducts({ condition, search });

  if (error) return "Error!";
  return (
    <>
      <Stack direction="row" justifyContent="center" spacing={6} sx={{ my: 4 }}>
        <TextField
          label="Recherche"
          sx={{ width: 400 }}
          value={search}
          autoComplete="off"
          onChange={setSearch}
        />
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
