import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchSearchId, fetchTickets } from './../../redux/features/tickets/async/asyncFetch';
import { selectAndSortTickets } from './../../redux/features/tickets/ticketsSelector'

import { v4 as uuidv4 } from 'uuid';

import Card from './../Card'
import s from './CardList.module.scss'

function CardList() {
    const dispatch = useDispatch()

    const { status, error, searchId, stopFetch, countOfTickets } = useSelector(state => state.tickets);

    const selectedTransfers = useSelector(state => state.checkbox.selectedTransfers)
    const filteredAndSortedTickets = useSelector(selectAndSortTickets)

    useEffect(() => {
        dispatch(fetchSearchId())
    }, [dispatch])

    useEffect(() => {
        if (searchId && !stopFetch) {
            const fetchNextTickets = async () => {
                const resultAction = await dispatch(fetchTickets(searchId));

                if (resultAction.payload && !resultAction.payload.stop) {
                    fetchNextTickets();
                }
            };

            fetchNextTickets();
        }
    }, [searchId, stopFetch, dispatch]);

    if (status === 'loading') return <>Loading</>;
    if (error) return <>{error}</>;

    const loader = !stopFetch ? <div className={s.loader}></div> : null;

    let content

    const slicedTicked = filteredAndSortedTickets.slice(0, countOfTickets)

    selectedTransfers.length != 0 ? content =
        <>
            {slicedTicked.map((ticket) => {
                return <Card key={uuidv4()} ticket={ticket} />
            })}
        </>
        :
        content = <div style={{ textAlign: 'center' }}>Рейсов, подходящих под заданные фильтры, не найдено</div>

    return (
        <div className={s.contentWrapper}>
            {loader}
            {content}
        </div>
    )
}

export default CardList
