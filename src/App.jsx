import { BrowserRouter } from "react-router-dom";
import MainRoute from "./MainRoute/MainRoute";
import { Provider } from "react-redux";
import store from "./Store/Store";
import NavBar from "./Components/NavBar";
import { Paper, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    type: "dark",
  },
});
// npm install @mui/material @emotion/react @emotion/styled
function App() {
  return (
    <>
      {/* <ChakraProvider> */}
      <ThemeProvider theme={theme}>
        <Paper>
          <Provider store={store}>
            <BrowserRouter>
              {/* <NavBar /> */}
              <MainRoute />
            </BrowserRouter>
          </Provider>
        </Paper>
      </ThemeProvider>
      {/* </ChakraProvider> */}
    </>
  );
}

export default App;
