import ReduxThunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import reducers from "./";

export default function configureStore() {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require("../reducers/index").default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
