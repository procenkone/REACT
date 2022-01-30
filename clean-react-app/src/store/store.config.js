import {configureStore} from "@reduxjs/toolkit";
import carReducer from "./carSlice";
import usersReducer from "./usersSlice";

const store = configureStore({// 1 - сховище для всіх редюсерів, обгортаємо апку
    reducer: {
        carReducer,
        usersReducer
    }
})

export default store