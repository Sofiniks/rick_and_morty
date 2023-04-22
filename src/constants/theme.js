import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
      primary: { 
      main: '#3a4767',
      light: '#bee5fd',
      dark: '#00022d'
    },  
    secondary: {
        main: '#fff874'
    },
    success: {
        main: '#03fc94'
    }
    },
    typography: {
        fontFamily: [
            'get_schwiftyregular',
            'Prompt'
        ]
    }

});