import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSearchId = createAsyncThunk(
    'tickets/fetchSearchId',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch('https://aviasales-test-api.kata.academy/search')


            if (!response.ok) {
                throw new Error('Failed to fetch Search ID')
            }

            return await response.json()

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)


export const fetchTickets = createAsyncThunk(
    'tickets/fetchTickets',
    async (searchId, { rejectWithValue }) => {
        try {
            const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)

            const data = await response.json()

            return data

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
