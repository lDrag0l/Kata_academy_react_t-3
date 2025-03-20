import { configureStore } from "@reduxjs/toolkit";

import checkboxReducer from './features/checkbox/checkboxSlice'
import ticketsReducer from './features/tickets/ticketsSlice'
import filtersReducer from './features/filters/filtersSlice'

export const store = configureStore({
    reducer: {
        checkbox: checkboxReducer,
        tickets: ticketsReducer,
        filters: filtersReducer
    },
    devTools: false,
});