import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchComments = createAsyncThunk('comments/fetchComments', async(postId) => {
    const response = await fetch(`https://www.reddit.com/comments/${postId}.json`);
    const data = await response.json();
    return data[1].data.children;
});

const commentsSlice = createSlice({
    name:'comments',
    initialState: {
        items: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchComments.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchComments.fulfilled, (state, action) => {
                state.items = action.payload;
                state.loading = false;
            })
            .addCase(fetchComments.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            });
    }
});