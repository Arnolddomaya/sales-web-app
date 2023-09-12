import { Card, Typography } from "@mui/material";
import { Counter } from "../../ds/organisms/index";

export default function CountersPage() {
  return (
    <Card>
      <Typography variant="h1">Counters Page</Typography>
      <Counter />
      <Counter initialValue={42} />
      <Counter initialValue={-10} step={2} />
    </Card>
  );
}
