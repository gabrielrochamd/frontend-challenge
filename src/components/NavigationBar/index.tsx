import { Link } from 'react-router-dom';
import homeIcon from '../../assets/icons/home.svg'
import styles from './styles.module.scss';

export default function NavigationBar() {
  return (
    <div className={styles.container}>
      <Link className={styles.homeButton} to="/">
        <img src={homeIcon} alt="Home" />
        <span>Home</span>
      </Link>
      <Link className={styles.librariesButton} to="/">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-book"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
        <span>Libraries</span>
      </Link>
      <Link className={styles.profileButton} to="/">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        <span>Profile</span>
      </Link>
    </div>
  );
}