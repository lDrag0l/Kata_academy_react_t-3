import { useDispatch, useSelector } from 'react-redux'

import { addMoreTickets } from './../../redux/features/tickets/ticketsSlice'

import s from './MoreCardButton.module.scss'

function MoreCardButton() {
    const dispatch = useDispatch()

    const selectedTransfers = useSelector(state => state.checkbox.selectedTransfers)

    const handleClick = () => {
        dispatch(addMoreTickets())
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    const content = selectedTransfers.length > 0 ? <button onClick={handleClick} className={s.moreCardButton}>Показать ещё 5 билетов</button> : null

    return (
        <>
            {content}
        </>
    )
}

export default MoreCardButton
