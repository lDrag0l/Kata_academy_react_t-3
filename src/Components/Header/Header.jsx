import logo from './../../assets/logo.svg'
import s from './Header.module.scss'

function Header() {
    return (
        <header className={s.headerLogo}>
            <img src={logo} alt="Aviasales" />
        </header>
    )
}

export default Header
