import { createSlice } from '@reduxjs/toolkit'

const initialState = {

    counter : 0
}

const counterslice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment : (state) => {

         state.counter = state.counter+1;
    }

  }
});

export const {increment} = counterslice.actions

export default counterslice.reducer