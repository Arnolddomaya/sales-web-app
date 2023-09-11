import { styled } from "@mui/material/styles";
import { Button as MuiButton } from "@mui/material";

export const Footer = styled("footer")(`
  background-color: teal;
  color: white;
  padding: 1rem;
  margin-top: 2rem;
`);

export const Button = styled(MuiButton, {
  shouldForwardProp: (prop) => prop !== "current",
})(({ theme, current }) => ({
  margin: `${theme.spacing(2)} 0`,
  color: "white",
  borderBottom: current ? "2px solid white" : 0,
}));
