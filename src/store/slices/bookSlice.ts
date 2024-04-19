import { createSlice } from "@reduxjs/toolkit";
import { BOOKS } from "@/utils/data";
import { Book } from "@/utils/types";

const initialState: { bookList: Book[]; editable?: Book } = {
  bookList: BOOKS,
  editable: undefined,
};

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
    setEditable: (state, action) => {
      state.editable = action.payload;
    },
    resetEditable: (state) => {
      state.editable = undefined;
    },
  },
});

export const { addBook, deleteBook, editBook, setEditable, resetEditable } =
  bookSlice.actions;
export default bookSlice.reducer;
