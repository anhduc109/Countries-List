import { ToggleDrawerAction, TOGGLE_DRAWER } from "../../types";

export function toggleDrawer(open: boolean): ToggleDrawerAction {
  return {
    type: TOGGLE_DRAWER,
    payload: {
      isOpen: open
    }
  };
}
