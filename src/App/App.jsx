import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import { router } from "./router";
import { theme } from "./theme";
import { CssBaseline } from "@mui/material";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./queryClient";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
