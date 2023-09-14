import { IconButton } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { FavoritesContext } from "../../contexts";
import { string } from "prop-types";

export default function ProductActions({ id }) {
  const { favorites, toggleFavorite } = FavoritesContext.useContext();
  const isFavorite = favorites.includes(id);
  return (
    <IconButton onClick={toggleFavorite(id)}>
      {isFavorite ? <Favorite /> : <FavoriteBorder />}
    </IconButton>
  );
}

ProductActions.propTypes = {
  id: string,
};
