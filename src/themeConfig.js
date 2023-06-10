
import { createTheme } from "@mui/material";

export const themeCustom = createTheme( {
    mode: "light",
    palette: {
        primary: {
            main: "#967E76",
            second:"#D7C0AE" 
        },
        secondary: {
            main: "#9BABB8",
            second: "#EEE3CB"
        }
    },
    typography: {
        fontFamily: "monospace",
        h1: {
            fontSize: "3rem"
        }
    },
    components: {
        MuiAccordion: {},
        MuiTextField: {}
    }

} )

