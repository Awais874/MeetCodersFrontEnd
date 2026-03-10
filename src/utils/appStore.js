import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./userSlice";
import feedreducer from "./feedSlice";
import connectionReducer from "./ConnectionSlice"
export const appStore = configureStore({
  reducer: {

    user : userReducer,
    feed : feedreducer,
    connections: connectionReducer,
  },
});

export default appStore;