import { createSlice } from '@reduxjs/toolkit';

const TRANSFER_OPTIONS = [0, 1, 2, 3];

const initialState = {
    selectedTransfers: [...TRANSFER_OPTIONS],
    isAllSelected: true,
    transferOptions: TRANSFER_OPTIONS,
};

const checkboxSlice = createSlice({
    name: 'checkbox',
    initialState,
    reducers: {
        toggleCheckbox: (state, action) => {
            const index = state.selectedTransfers.indexOf(action.payload)

            if (index === -1) {
                state.selectedTransfers.push(action.payload)
            } else {
                state.selectedTransfers.splice(index, 1);
            }

            state.isAllSelected = state.selectedTransfers.length === state.transferOptions.length
        },
        toggleAll: (state) => {
            if (state.isAllSelected) {
                state.selectedTransfers = []
            } else {
                state.selectedTransfers = [...state.transferOptions]
            }
            state.isAllSelected = !state.isAllSelected
        }
    }
})

export const { toggleCheckbox, toggleAll } = checkboxSlice.actions

export default checkboxSlice.reducer

