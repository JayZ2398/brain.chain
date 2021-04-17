import { useDispatch as rrUseDispatch } from "react-redux";
import { useSelector, TypedUseSelectorHook } from "react-redux";
// import isEqual from 'lodash/isEqual'

import { AppDispatch } from "./store";
import { RootState } from "./rootReducer";

export const useDispatch = () => rrUseDispatch<AppDispatch>();

// TODO
/// 'useSelector' that defaults equality function to equivalence by 'lodash/isequal'.
export const useEquivSelector: TypedUseSelectorHook<RootState> = (
  selector,
  eqFn
) => {
  return useSelector(selector);
  // return useSelector(selector, eqFn ? eqFn : isEqual);
};
