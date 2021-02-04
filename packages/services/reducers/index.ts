import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { combineReducers } from 'redux'
import showsSlice from './ShowsSlice'

const rootReducer = combineReducers({
    shows: showsSlice
});


export const store = configureStore({
    reducer: rootReducer
})
  
export type RootState = ReturnType<typeof store.getState>  
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
