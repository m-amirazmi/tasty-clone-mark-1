import { createMuiTheme } from "@material-ui/core/styles";

const appOrangePastel = "#ef6c00";
const appBluePastel = "#769DCC";

export default createMuiTheme({
  palette: {
    common: {
      blue: `${appBluePastel}`,
      orange: `${appOrangePastel}`,
    },
    primary: {
      main: `#fff`,
      background: `${appOrangePastel}`,
    },
    secondary: {
      main: `${appBluePastel}`,
    },
  },
});
