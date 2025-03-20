import { createSlice } from "@reduxjs/toolkit";
import { fetchSearchId, fetchTickets } from './async/asyncFetch';

const initialState = {
    tickets: [],
    error: null,
    status: 'loading',
    searchId: null,
    stopFetch: false,
    countOfTickets: 5
}

const ticketsSlice = createSlice({
    name: 'tickets',
    initialState,

    reducers: {
        addMoreTickets: (state) => {
            state.countOfTickets += 5
        }
    },

    extraReducers: (builder) => {
        builder
            //searchID
            .addCase(fetchSearchId.pending, (state) => {
                state.error = null;
            })
            .addCase(fetchSearchId.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.error = null;
                state.searchId = action.payload.searchId
            })
            .addCase(fetchSearchId.rejected, (state, action) => {
                state.error = action.payload;
            })

            //tickets
            .addCase(fetchTickets.pending, (state) => {
                state.error = null;
            })
            .addCase(fetchTickets.fulfilled, (state, action) => {
                state.tickets = [...state.tickets, ...action.payload.tickets]
                state.stopFetch = action.payload.stop
                state.status = 'succeeded';
            })
            .addCase(fetchTickets.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
    }
})

export const { addMoreTickets } = ticketsSlice.actions

export default ticketsSlice.reducer