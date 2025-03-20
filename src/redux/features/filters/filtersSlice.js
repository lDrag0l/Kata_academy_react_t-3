import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedFilter: 0,
    filters: [0, 1, 2]
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.selectedFilter = action.payload
        }
    }
})

export const { setFilter } = filtersSlice.actions

export default filtersSlice.reducer