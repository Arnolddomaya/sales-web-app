import { createTheme } from "@mui/material";

// on import les font font reboto ici pour les avoir sur l'ordinateur du lecteur
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        variant: "outlined",
      },
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
    h1: {
      fontSize: "2rem",
    },
  },
});
