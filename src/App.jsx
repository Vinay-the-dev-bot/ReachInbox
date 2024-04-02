import { BrowserRouter } from "react-router-dom";
import MainRoute from "./MainRoute/MainRoute";
import { Provider } from "react-redux";
import store from "./Store/Store";
import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    type: "dark",
  },
});
function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <MainRoute />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
