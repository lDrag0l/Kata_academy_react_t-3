import { createSelector } from "@reduxjs/toolkit";

const tickets = state => state.tickets.tickets

const selectedTransfers = state => state.checkbox.selectedTransfers

const selectedFilter = state => state.filters.selectedFilter

export const selectAndSortTickets = createSelector(
    [tickets, selectedTransfers, selectedFilter],
    (tickets, selectedTransfers, selectedFilter) => {

        const filteredTickets = tickets.filter((item) => {
            const [there, back] = item.segments

            const transfersCount = there.stops.length >= back.stops.length ? there.stops.length : back.stops.length

            return selectedTransfers.indexOf(transfersCount) !== -1
        })

        switch (selectedFilter) {
            case 0:
                return [...filteredTickets].sort((a, b) => a.price - b.price)
            case 1:
                return [...filteredTickets].sort((a, b) => {
                    const durationA = a.segments.reduce((sum, segment) => sum + segment.duration, 0)
                    const durationB = b.segments.reduce((sum, segment) => sum + segment.duration, 0)

                    return durationA - durationB
                })
            case 2:
                return [...filteredTickets].sort((a, b) => {
                    const valueA = a.price + a.segments.reduce((sum, segment) => sum + segment.duration, 0) * 15
                    const valueB = b.price + b.segments.reduce((sum, segment) => sum + segment.duration, 0) * 15

                    return valueA - valueB
                })
            default: return tickets
        }
    }
)