import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './userSlice';

const store = configureStore({
    reducer:{         //////******* : instead of an =
        user: userReducer,
    }
});

export default store;