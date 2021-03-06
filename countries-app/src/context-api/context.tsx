import React from "react";

export const themes: any = {
  light: {
    palette: {
      primary: {
        main: "#546e7a"
      },
      type: "light"
    }
  },
  dark: {
    palette: {
      primary: {
        main: "#333"
      },
      secondary: {
        main: "#2196F3"
      },
      type: "dark"
    }
  }
};

export default React.createContext({
  theme: themes.dark,
  switchTheme: () => {}
});
