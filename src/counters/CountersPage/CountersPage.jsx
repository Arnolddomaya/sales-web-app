import { Counter } from "../Counter";

export default function CountersPage() {
  return (
    <>
      <h1>Counters Page</h1>
      <Counter />
      <Counter initialValue={42} />
      <Counter initialValue={-10} step={2} />
    </>
  );
}
