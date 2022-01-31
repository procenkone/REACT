import {configureStore} from "@reduxjs/toolkit";

import carReducer from "./carSlice";
import usersReducer from "./usersSlice";
import postsReducer from "./postsSlice";
import commentsReducer from "./commentsSlice";

const store = configureStore({// 1 - сховище для всіх редюсерів, обгортаємо апку провайдером якому передаєм наш стор
    reducer: {
        carReducer,
        usersReducer,
        postsReducer,
        commentsReducer
    }
})

export default store