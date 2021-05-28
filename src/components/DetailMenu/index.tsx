import bookOpenIcon from '../../assets/icons/book-open.svg';
import headphonesIcon from '../../assets/icons/headphones.svg';
import shareIcon from '../../assets/icons/share.svg';
import styles from './styles.module.scss';

export default function DetailMenu() {
  return (
    <div className={styles.container}>
      <div className={styles.button}>
        <img src={bookOpenIcon} alt="Read" />
        <span>Read</span>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.button}>
        <img src={headphonesIcon} alt="Listen" />
        <span>Listen</span>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.button}>
        <img src={shareIcon} alt="Share" />
        <span>Share</span>
      </div>
    </div>
  );
}