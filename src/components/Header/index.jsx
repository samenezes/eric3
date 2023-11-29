import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <Link to="/">
                <span>Notas de Recados</span>
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/notasadicionadas">Notas Adicionadas</Link>
                <Link to="/notasexcluidas">Notas Excluídas</Link>
            </nav>
        </header>
    )    
}

export default Header