import { createSlice , createAsyncThunk} from '@reduxjs/toolkit';
import { getAllPosts } from '../../network/post';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const data = await getAllPosts();
    return data;
  }
)

const initialState = {
  posts: [],
  searchPosts: [],
  fetchStatus: '',
}

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    sortBy: (state, { payload }) => {
      const sortedState = [...state.posts];
      sortedState.sort((a, b) => {
        const value1 = payload === 'id' ? a[payload] : a[payload].charCodeAt();
        const value2 = payload === 'id' ? b[payload] : b[payload].charCodeAt();
        return value2 - value1;
      });
      state.posts = sortedState;
    },
    searchBy: (state, { payload }) => {
      const filteredPosts = state.posts.filter(p => {
        if (p.id === Number(payload)) {
          return p;
        } else if (p.title.includes(payload)) {
          return p;
        } else if (p.body.includes(payload)) {
          return p;
        }
      });
      state.searchPosts = filteredPosts;
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchPosts.fulfilled, (state, { payload }) => {
      state.posts = payload;
      state.fetchStatus = 'fullfield'
    });
    builder.addCase(
      fetchPosts.pending,
      (state) => {
        state.fetchStatus = 'pending';
      }
    );
    builder.addCase(
      fetchPosts.rejected,
      (state) => {
        state.fetchStatus = 'rejected';
      }
    );
  }
})

export const { sortBy, searchBy } = postSlice.actions

export default postSlice.reducer