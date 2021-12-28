import Link from 'next/link';
import classes from './main-header.module.css';
function MainHeader(){
    return (
        <header className={classes.header}>
            <div className={classes.homePage}>
                <Link href='/'>Pedala</Link>
            </div>
            <nav className={classes.nav}>
                <ul className={classes.list}>
                    <li className={classes.linkItem}>
                        <Link href='/players'>Players</Link>
                    </li>
                    {/* <li className={classes.linkItem}>
                        <Link href='/players'>Players</Link>
                    </li> */}
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader;