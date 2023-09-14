import { arrayOf, node, string } from "prop-types";
import React from "react";
import { useSet } from "react-use";

const intialFavorites = [];

// l'argument de la methode createContext() permet de setter la valeur de la data
const FavoritesContext = React.createContext(intialFavorites);

const useContext = () => React.useContext(FavoritesContext);

const Provider = ({ children, favorites = intialFavorites }) => {
  const [favoritesIds, { toggle }] = useSet(new Set(favorites));

  const toggleFavorite = (id) => () => toggle(id);
  return (
    //  l'ecriture '{{ favorites }}' avec deux crochets permet d'evoyer de la donnée et aussi des hooks
    <FavoritesContext.Provider
      value={{ favorites: Array.from(favoritesIds), toggleFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

Provider.propTypes = {
  children: node,
  favorites: arrayOf(string),
};

const CustomFavoritesContext = {
  Provider,
  useContext,
};

export default CustomFavoritesContext;
