import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'


export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async (args, { dispatch, getState }) => {
      //thunkApi: { dispatch, getState }
      //getState gives us access to "all" the state in the store
      //we can use the dispatch to 'dispatch' another action
      // const { posts } = getState();
      // console.log(posts);
      return fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${args.userId}`
      ).then(res => res.json());
      //.then(() => dispatch(something else...))
    }
  );



  

const initialState = {

    data : [],
    status: null
}

const userSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers : {
    [getPosts.pending]: (state, action) => {
        state.status = 'loading';
      },
    [getPosts.fulfilled]: (state, action) => {
        state.data = action.payload;
        state.status = 'success';
      },
     [getUSer.rejected]: (state, action) => {
        state.status = 'failed';
      },
      [getPosts.pending]: (state, action) => {
        state.status = 'loading';
      },
    [getUSer.fulfilled]: (state, action) => {
        state.data = action.payload;
        state.status = 'success';
      },
     [getUSer.rejected]: (state, action) => {
        state.status = 'failed';
      }
  }

});

export const {} = userSlice.actions

export default userSlice.reducer