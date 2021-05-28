import videoThumbnail from '../../assets/images/video-thumbnail.png';
import styles from './styles.module.scss';

export default function CardVideo() {
  return (
    <div className={styles.container}>
      <img src={videoThumbnail} alt="Don't Make Me Think" />
      <div className={styles.info}>
        <h3 className={styles.title}>Don't Make Me Think - Steve Krug</h3>
        <div className={styles.stats}>
          <span className={styles.author}>Jesse Showalter</span>
          <span className={styles.viewCount}>5.2K Views</span>
          <span className={styles.date}>1 Week ago</span>
        </div>
        <p className={styles.description}>"Don't Make Me Think" by Steve Krug is one of the first books I read when I was getting into digital design. It helped me move from designing things that just "look nice" to designing things that are usable, useful, memorable and simple to learn and use.</p>
      </div>
    </div>
  );
}
