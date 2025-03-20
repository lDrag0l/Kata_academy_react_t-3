import ChexboxsFilter from '../ChexboxsFilter'
import Header from '../Header'
import TabFilter from '../TabFilter'
import CardList from '../CardList'
import MoreCardButton from '../MoreCardButton/MoreCardButton'

import s from './App.module.scss'

function App() {
    return (
        <>
            <Header />
            <article className={s.contentWrapper}>
                <ChexboxsFilter />
                <section>
                    <TabFilter />
                    <CardList />
                    <MoreCardButton />
                </section>
            </article>
        </>
    )
}

export default App
