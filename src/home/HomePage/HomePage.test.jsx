//import { render, screen, waitFor } from "../../test-utils";
import { render, screen } from "../../test-utils";
import { describe, expect } from "vitest";
import HomePage from "./HomePage";
//import { products } from "../../fixtures/products";

const radio = (name) => screen.getByRole("radio", { name });
const progressBar = () => screen.getByRole("progressbar");
//const columnHeader = (name) => screen.getByRole("columnheader", { name });

describe("HomePage", () => {
  it("renders a product list ant its own search engine and filters", async () => {
    render(<HomePage />);

    expect(
      screen.getByRole("textbox", { name: "Recherche" }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("radiogroup", { name: "Condition" }),
    ).toBeInTheDocument();

    expect(radio("Toutes")).toBeInTheDocument();
    expect(radio("Neuf")).toBeInTheDocument();
    expect(radio("Occasion")).toBeInTheDocument();

    expect(progressBar()).toBeInTheDocument();

    //await waitFor(() => expect(progressBar()).not.toBeInTheDocument());

    // expect(screen.getByRole("grid")).toHaveAttribute(
    //   "aria-rowcount",
    //   String(1 + products.length),
    // );
    // expect(columnHeader("Image produit")).toBeInTheDocument();
    // expect(columnHeader("Description")).toBeInTheDocument();
    // expect(columnHeader("Prix")).toBeInTheDocument();

    // Pour debugger
    //screen.debug()
    // products.forEach(({ name, id }) => {
    //   expect(screen.getByRole("link", { name })).toHaveAttribute(
    //     "href",
    //     `/products/${id}`,
    //   );
    // });
  });
});
