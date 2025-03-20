import { useDispatch, useSelector } from "react-redux";

import { setFilter } from '../../redux/features/filters/filtersSlice';

import s from './TabFilter.module.scss'

function TabFilter() {
    const selectedFilter = useSelector(state => state.filters.selectedFilter)
    const filters = useSelector(state => state.filters.filters)

    const dispatch = useDispatch()

    const options = ['Самый дешевый', 'Самый быстрый', 'Оптимальный'];

    return (
        <div className={s.tabContainer}>
            {filters.map(tab => (
                <button
                    key={tab}
                    className={`${s.tab} ${selectedFilter === tab ? s.activeTab : ''}`}
                    onClick={() => dispatch(setFilter(tab))}
                >
                    {options[tab]}
                </button>
            ))}
        </div>
    );
}

export default TabFilter
