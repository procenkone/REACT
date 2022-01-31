import {configureStore} from "@reduxjs/toolkit";

import carReducer from "./carSlice";
import usersReducer from "./usersSlice";
import postsReducer from "./postsSlice";

const store = configureStore({// 1 - сховище для всіх редюсерів, обгортаємо апку
    reducer: {
        carReducer,
        usersReducer,
        postsReducer
    }
})

export default store