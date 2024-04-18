import { createSlice } from "@reduxjs/toolkit";
import { BOOKS } from "@/utils/data";

const initialState = { bookList: BOOKS };

export const bookSlice = createSlice({
  name: "bookList",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.bookList = [...state.bookList, action.payload];
    },
    deleteBook: (state, action) => {
      const id = action.payload;
      const newList = state.bookList.filter((book) => book.id !== id);
      state.bookList = [...newList];
    },
    editBook: (state, action) => {
      const { id } = action.payload;
      const index = state.bookList.findIndex((book) => book.id === id);
      state.bookList[index] = action.payload;
    },
  },
});

export const { addBook, deleteBook, editBook } = bookSlice.actions;
export default bookSlice.reducer;
