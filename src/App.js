import React from "react";
import { Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import Routes from "./routes";
import GlobalStyle from "./styles/global";
import history from "./services/history";

import { store, persistor } from "./store";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router history={history}>
            <Routes />
            <GlobalStyle />
          </Router>
        </PersistGate>
      </Provider>
    </DndProvider>
  );
}

export default App;
