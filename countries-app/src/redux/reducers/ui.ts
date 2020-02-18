import { UIState, TOGGLE_DRAWER, ToggleDrawerAction } from "../../types";

export default function ui(
  state: UIState = {
    toggleDrawer: false
  },
  action: ToggleDrawerAction
) {
  switch (action.type) {
    case TOGGLE_DRAWER: {
      const { isOpen } = action.payload;
      return { ...state, toggleDrawer: isOpen };
    }
    default:
      return state;
  }
}
