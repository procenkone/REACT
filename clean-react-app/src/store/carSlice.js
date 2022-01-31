import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {carsService} from "../services/carsService/cars.service";

export const getAllCars = createAsyncThunk(//функція для асинхронного запиту
    'carSlice/getAllCars',//обовязкова назва
    async (_, {rejectWithValue}) => {
        try {
            const cars = await carsService.getAll()
             return cars
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const createCar = createAsyncThunk(//створили функцію для запису нового обєкта в базу
    'carSlice/createCar',//обовязкове унікальне імя
    async ({data}, {dispatch}) => {//асинхронна ф-я яка приймає данні з форми і функцію діспатч для оновлення стейту
        try {
            const newCar = await carsService.create(data)//надіслали данні на бек за допомогою аксіос сервісу з методом пост
            dispatch(addCar({data: newCar}))//дозаписали данні в стейт
        } catch (e) {
            console.log(e)
        }
    }
)

export const deleteCar = createAsyncThunk(//створили ф-ю асинхронну для видалення карів
    'carSlice/deleteCar',//обовязкова унікальна назва
    async (id, {dispatch}) => {//асинхронниа ф-я яка приймає айдішку для видалення і діспатч для передачі айдішки в метод який змінить стейт, щоб не робити повторний запит для відмальовки оновленого стану бази
        try {
            await carsService.delete(id)//запит на видалення до бекенду
            dispatch(delCar(id))//перед
        } catch (e) {
            console.log(e, 'del err')
        }
    }
)

const carSlice = createSlice({// 2 - створили слайс для початкового стану і бізнес логіки
    name: 'carSlice',
    initialState: {
        cars: [],
        status: null,
        error: null
    },
    reducers: {
        addCar: (state, action) => {
            state.cars.push(action.payload.data)
        },
        delCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload)

        }
    },
    extraReducers: {
        [getAllCars.pending]: (state, action) => {
            state.status = 'pending'
            state.error = null
        },
        [getAllCars.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.cars = action.payload
        },
        [getAllCars.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload

        }
    }
})


const carReducer = carSlice.reducer//експортнули по дефолту в стор
export const {addCar, delCar} = carSlice.actions//експортнули для виклику методів, ці методи будемо викликати в діспатчі

export default carReducer