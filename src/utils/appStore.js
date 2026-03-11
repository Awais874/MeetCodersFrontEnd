import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./userSlice";
import feedreducer from "./feedSlice";
import connectionReducer from "./ConnectionSlice";
import requestReducer from "./requestsSlice";
export const appStore = configureStore({
  reducer: {

    user : userReducer,
    feed : feedreducer,
    connections: connectionReducer,
requests: requestReducer,
  },
});

export default appStore;