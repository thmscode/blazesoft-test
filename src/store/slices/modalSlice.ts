import { createSlice } from "@reduxjs/toolkit";
import { MODAL_STATE } from "@/utils/constants";

const initialState = { value: "" };

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showAddModal: (state) => {
      state.value = MODAL_STATE.ADD;
    },
    showEditModal: (state) => {
      state.value = MODAL_STATE.EDIT;
    },
    resetModal: (state) => {
      state.value = MODAL_STATE.RESET;
    },
  },
});

export const { showAddModal, showEditModal, resetModal } = modalSlice.actions;
export default modalSlice.reducer;
