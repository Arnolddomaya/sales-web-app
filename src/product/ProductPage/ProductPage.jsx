import { Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import useProduct from "../../hooks/useProduct";
import { ProductCondition } from "../ProductCondition";
import { ProductImage } from "../ProductImage";
import { ProductPrice } from "../ProductPrice";

export default function ProductPage() {
  const { id } = useParams();
  const { isLoading, error, data: product } = useProduct(id);

  if (isLoading) return "is loading!";
  if (error) return console.error(error);

  const { name, imageUrl, description, price, condition } = product;

  return (
    <>
      <Typography variant="h1"> Product Name</Typography>
      <Grid container spacing={2} sx={{ px: 2 }}>
        <Grid item md={4}>
          <ProductImage
            imageUrl={imageUrl}
            name={name}
            width={350}
            height={350}
          />
        </Grid>
        <Grid container item md={8} direction="column">
          <Grid item container spacing={2} sx={{ pb: 2 }}>
            <Grid item>
              <ProductCondition condition={condition}></ProductCondition>
            </Grid>
            <Grid item>
              <ProductPrice price={price} />
            </Grid>
          </Grid>
          <Grid item>
            <Typography> {description} </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
