import { combineReducers, configureStore } from '@reduxjs/toolkit';
import generalReducer from './reducers/GeneralSlice';
// import { postApi } from '../services/PostService';
// import userReducer from './reducers/UserSlice';

const rootReducer = combineReducers({
    generalReducer,
    // userReducer,
    // [postApi.reducerPath]: postApi.reducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        // middleware: (getDefaultMiddleware) =>
        //     getDefaultMiddleware().concat(postApi.middleware)
    });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];