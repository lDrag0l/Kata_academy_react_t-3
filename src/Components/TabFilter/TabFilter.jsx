import { useDispatch, useSelector } from "react-redux";

import { setFilter } from '../../redux/features/filters/filtersSlice';

import s from './TabFilter.module.scss'
import { resetCountOfTicket } from "../../redux/features/tickets/ticketsSlice";

function TabFilter() {
    const selectedFilter = useSelector(state => state.filters.selectedFilter)
    const filters = useSelector(state => state.filters.filters)

    const dispatch = useDispatch()

    const options = ['Самый дешевый', 'Самый быстрый', 'Оптимальный'];

    const handleClick = (tab) => {
        dispatch(setFilter(tab))
        dispatch(resetCountOfTicket())
    }

    return (
        <nav className={s.tabContainer}>
            {filters.map(tab => (
                <button
                    key={tab}
                    className={`${s.tab} ${selectedFilter === tab ? s.activeTab : ''}`}
                    onClick={() => handleClick(tab)}
                >
                    {options[tab]}
                </button>
            ))}
        </nav>
    );
}

export default TabFilter
