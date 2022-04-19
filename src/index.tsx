import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/global";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { CookiesProvider } from "react-cookie";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <CookiesProvider>
          <App />
        </CookiesProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
