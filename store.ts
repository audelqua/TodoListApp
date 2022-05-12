import { applyMiddleware, createStore } from "redux";
import { createWrapper } from 'next-redux-wrapper';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';
import { IS_SERVER } from './constants';

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
}

const makeStore = () => {
    return createStore(reducers, bindMiddleware([thunkMiddleware]));
}

export const wrapper = createWrapper(makeStore);
