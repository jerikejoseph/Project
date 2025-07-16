import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  header: {
    vr_date: '',
    ac_name: '',
    status: 'A',
  },
  detail: [],
};

const voucherSlice = createSlice({
  name: 'voucher',
  initialState,
  reducers: {
    setHeader: (state, action) => {
      state.header = action.payload;
    },
    addDetailRow: (state, action) => {
      state.detail.push(action.payload);
    },
    updateDetailRow: (state, action) => {
      const { index, data } = action.payload;
      state.detail[index] = data;
    },
    removeDetailRow: (state, action) => {
      state.detail.splice(action.payload, 1);
    },
  },
});

export const { setHeader, addDetailRow, updateDetailRow, removeDetailRow } = voucherSlice.actions;
export default voucherSlice.reducer;
