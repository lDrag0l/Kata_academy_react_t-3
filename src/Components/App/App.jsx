import ChexboxsFilter from '../ChexboxsFilter'
import Header from '../Header'
import TabFilter from '../TabFilter'
import s from './App.module.scss'
import CardList from '../CardList'
import MoreCardButton from '../MoreCardButton/MoreCardButton'

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
