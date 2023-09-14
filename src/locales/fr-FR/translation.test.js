import { expect } from "vitest";
import translation from "./translations.json";

// principe de test par snapshoot
describe("fr-FR translation", () => {
  test("writes all translations", () => {
    expect(translation).toMatchSnapshot();
  });
});
