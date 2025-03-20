import { useDispatch, useSelector } from 'react-redux'

import { addMoreTickets } from './../../redux/features/tickets/ticketsSlice'

import s from './MoreCardButton.module.scss'

function MoreCardButton() {
    const dispatch = useDispatch()

    const selectedTransfers = useSelector(state => state.checkbox.selectedTransfers)

    const content = selectedTransfers.length > 0 ? <button onClick={() => { dispatch(addMoreTickets()) }} className={s.moreCardButton}>Показать ещё 5 билетов</button> : null

    return (
        <>
            {content}
        </>
    )
}

export default MoreCardButton
