import s from './Card.module.scss'
import { formateDate, formatDuration } from './../../Utils'

import PropTypes from 'prop-types';

function Card({ ticket = {} }) {
    const { price, carrier, segments } = ticket
    const [there, back] = segments

    const flyTimeTo = formateDate(there.date, there.duration)

    const flyTimeBack = formateDate(back.date, back.duration)

    const flights = [
        {
            route: `${there.origin} – ${there.destination}`,
            time: `${flyTimeTo.start} – ${flyTimeTo.arrival}`,
            duration: formatDuration(there.duration),
            transfers: there.stops.length !== 0 ? `${there.stops.length} пересадки` : 'Без пересадок',
            transferLocations: there.stops.join(' '),
        },
        {
            route: `${back.origin} – ${back.destination}`,
            time: `${flyTimeBack.start} – ${flyTimeBack.arrival}`,
            duration: formatDuration(back.duration),
            transfers: back.stops.length !== 0 ? `${back.stops.length} пересадки` : 'Без пересадок',
            transferLocations: back.stops.join(' '),
        }
    ];

    return (
        <div className={s.Card}>
            <div className={s.cardHeader}>
                <div className={s.cardPrice}>{price} Р</div>
                <img className={s.cardCompLogo} src={`https://pics.avs.io/99/36/${carrier}.png`} alt={carrier} />
            </div>
            {
                flights.map((flight, index) => (
                    <div key={index} className={index === 0 ? s.cardDetailsFrom : s.cardDetailsTo}>
                        <div>
                            <div className={s.routeTop}>{flight.route}</div>
                            <div className={s.routeBottom}>{flight.time}</div>
                        </div>
                        <div>
                            <div className={s.durationTop}>В пути</div>
                            <div className={s.durationBottom}>{flight.duration}</div>
                        </div>
                        <div>
                            <div className={s.transfersTop}>{flight.transfers}</div>
                            <div className={s.transfersBottom}>{flight.transferLocations}</div>
                        </div>
                    </div>
                ))
            }
        </div >
    )
}

export default Card

Card.propTypes = {
    ticket: PropTypes.object
};
