import s from './Header.module.css';
import logo from './logo.png'; // relative path to image 


const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.logo} src={logo}
                alt="" />
        </header>
    )
}

export default Header;