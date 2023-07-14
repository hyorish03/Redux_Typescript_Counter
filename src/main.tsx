import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createStore } from "redux";
import rootReducer from "./reducers/index.tsx";
import { Provider } from "react-redux";

const store = createStore(rootReducer);
store.dispatch({ type: "ADD_TODO", text: "useRedux" });
console.log(store.getState());
const render = () => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <Provider store={store}>
        <App
          value={store.getState()}
          onIncrement={() => store.dispatch({ type: "INCREMENT" })}
          onDecrement={() => store.dispatch({ type: "DECREMENT" })}
        />
      </Provider>
    </React.StrictMode>
  );
};

render();

store.subscribe(render);
