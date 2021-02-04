import { createSlice, PayloadAction, SliceCaseReducers, ValidateSliceCaseReducers } from "@reduxjs/toolkit"

interface GenericState<T> {
    data?: T
    status: 'loading' | 'finished' | 'error'
  }
  
  const createGenericSlice = <
    T,
    Reducers extends SliceCaseReducers<GenericState<T>>
  >
  ({name = '', initialState, reducers}: {
    name: string
    initialState: GenericState<T>
    reducers: ValidateSliceCaseReducers<GenericState<T>, Reducers>
  }) => {
    return createSlice({
      name,
      initialState,
      reducers: {
        start(state) {
          state.status = 'loading'
        },
        success(state: GenericState<T>, action: PayloadAction<T>) {
          state.data = action.payload
          state.status = 'finished'
        },
        ...reducers
      }
    })
  }
  