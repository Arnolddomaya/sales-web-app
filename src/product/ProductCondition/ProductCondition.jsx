/**
 *
 * @param {object} props
 * @param {"new" |"used"} props.condition
 * @returns {React.ReactElement}
 */

import { oneOf } from "prop-types";

export default function ProductCondition({ condition }) {
  return condition === "neuf" ? "Neuf" : "Occasion";
}

ProductCondition.propTypes = {
  condition: oneOf(["new", "used"]),
};
