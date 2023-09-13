import { useReducer } from "react";

/**
 * @typedef {object} Constraints
 * @property {string} name
 * @property {string} label
 */

/**
 * @typedef {object} ConstraintsState
 * @property {boolean} cost
 * @property {boolean} scope
 * @property {boolean} time
 */

const constraintsReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_COST":
      return { ...state, cost: !state.cost };
    case "TOGGLE_SCOPE":
      return { ...state, scope: !state.scope };
    case "TOGGLE_TIME":
      return { ...state, time: !state.time };
    default:
      return state;
  }
};

const initialConstraintsState = (constraints) =>
  Object.fromEntries(constraints.map(({ name }) => [name, false]));

export default function useConstraints(constraints) {
  const CONSTRAINT_TYPES = Object.fromEntries(
    constraints.map(({ name }) => [name, `TOGGLE_${name.toUpperCase()}`]),
  );

  const [constraintsState, dispatch] = useReducer(
    constraintsReducer,
    initialConstraintsState(constraints),
  );

  const toggle = (name) => () => {
    dispatch({
      type: CONSTRAINT_TYPES[name],
    });
  };
  return { constraintsState, toggle };
}
