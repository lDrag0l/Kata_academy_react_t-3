import s from './ChexboxsFilter.module.scss'
import { useDispatch, useSelector } from "react-redux";

import { toggleCheckbox, toggleAll } from '../../redux/features/checkbox/checkboxSlice';

function ChexboxsFilter() {
    const all = useSelector(state => state.checkbox.isAllSelected)
    const checkboxs = useSelector(state => state.checkbox.transferOptions)
    const selectedTransfers = useSelector(state => state.checkbox.selectedTransfers)
    const dispatch = useDispatch()

    const options = {
        0: 'Без пересадок',
        1: 'пересадка',
        2: 'пересадки',
        3: 'пересадки'
    }

    return (
        <div className={s.optionsWrapper}>
            <h3 className={s.optionHeader}>Количество пересадок</h3>
            <label className={s.optionLabel}>
                <input
                    type="checkbox"
                    checked={all}
                    className={s.optionInput}
                    onChange={() => dispatch(toggleAll())}
                />
                <span className={s.optionText}>
                    Все
                </span>
            </label>
            {checkboxs.map(checkbox => (

                <label key={checkbox} className={s.optionLabel}>
                    <input
                        type="checkbox"
                        checked={selectedTransfers.includes(checkbox)}
                        className={s.optionInput}
                        onChange={() => dispatch(toggleCheckbox(checkbox))}
                    />
                    <span className={s.optionText}>
                        {`${checkbox ? checkbox : ''} ${options[checkbox]}`}
                    </span>
                </label>
            ))
            }
        </div >
    )
}

export default ChexboxsFilter
