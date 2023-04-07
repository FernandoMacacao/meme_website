import { ThemeProvider } from "@mui/material";
import "./App.css";
import { theme, Navbar } from "./common/index";
import { LanguageContextProvider } from "./configuration/app-context-manager/LanguageContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LanguageContextProvider>
        <Navbar />
        App Works!
      </LanguageContextProvider>
    </ThemeProvider>
  );
}

export default App;
