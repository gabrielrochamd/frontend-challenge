import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardVideo from '../../components/CardVideo';
import NavigationBar from '../../components/NavigationBar';
import ReadingBook from '../../components/ReadingBook';
import chartIcon from '../../assets/icons/chart.svg';
import searchIcon from '../../assets/icons/search.svg';
import circleVector1 from '../../assets/vectors/circle-1.svg';
import ovalVector1 from '../../assets/vectors/oval-1.svg';
import polygonVector1 from '../../assets/vectors/polygon-1.svg';
import rectangleVector1 from '../../assets/vectors/rectangle-1.svg';
import styles from './styles.module.scss';

export default function Home() {
  const [discoverBook1, setDiscoverBook1] = useState<any>({});
  const [discoverBook2, setDiscoverBook2] = useState<any>({});

  useEffect(() => {
    axios.get('https://www.googleapis.com/books/v1/volumes/R42aBAAAQBAJ').then((response) => {
      setDiscoverBook1(response.data);
    }).catch((error) => {
      console.log(error);
    });

    axios.get('https://www.googleapis.com/books/v1/volumes/TDkfEAAAQBAJ').then((response) => {
      setDiscoverBook2(response.data);
    }).catch((error) => {
      console.log(error);
    });
  }, []);
  
  return (
    <>
      <div className={styles.container}>
        <Link className={styles.searchButton} to="/search">
          <img src={searchIcon} alt="Search" />
          <span>Search book</span>
        </Link>
        <h1 className={styles.greeting}>
          Hi, <span className={styles.name}>Mehmed Al Fatih</span> <span className={styles.wavingHand}>👋</span>
        </h1>
        <section className={styles.discover}>
          <header>
            <h2>Discover new books</h2>
            <Link to="#">More</Link>
          </header>
          <main>
            <div className={styles.paddingContainer}>
              <div className={styles.bookContainer} style={{
                background: '#00173d'
              }}>
                <div className={styles.info}>
                  <h2>{discoverBook1.volumeInfo?.title || ''}</h2>
                  <h3>{
                    discoverBook1.volumeInfo?.authors ? (
                      discoverBook1.volumeInfo?.authors[0]
                    ) : 'No authors specified'
                  }</h3>
                  <span>
                    <div>
                      <img src={chartIcon} alt="120+ Read Now" />&nbsp;
                      <strong>120+</strong>&nbsp;Read Now
                    </div>
                  </span>
                </div>
                <div className={styles.cover}>
                  <div className={styles.imageContainer}>
                    <img
                      className={styles.bookImage}
                      src={
                        discoverBook1.volumeInfo?.imageLinks?.smallThumbnail ||
                        discoverBook1.volumeInfo?.imageLinks?.thumbnail
                      }
                      alt={discoverBook1.volumeInfo?.title || ''}
                    />
                    <img className={styles.circleDiscoverBook1} src={circleVector1} alt="" />
                    <img className={styles.polygonDiscoverBook1} src={polygonVector1} alt="" />
                    <img className={styles.rectangleDiscoverBook1} src={rectangleVector1} alt="" />
                  </div>
                </div>
                <img src={ovalVector1} alt="" className={styles.ovalDiscoverBook} />
              </div>
            </div>
            <div className={styles.paddingContainer}>
              <div className={styles.bookContainer} style={{
                background: '#451475'
              }}>
                <div className={styles.info}>
                  <h2>{discoverBook2.volumeInfo?.title || ''}</h2>
                  <h3>{
                    discoverBook2.volumeInfo?.authors ? (
                      discoverBook2.volumeInfo?.authors[0]
                    ) : 'No authors specified'
                  }</h3>
                  <span>
                    <div>
                      <img src={chartIcon} alt="90+ Read Now" />&nbsp;
                      <strong>90+</strong>&nbsp;Read Now
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </main>
          <img src={ovalVector1} alt="" className={styles.ovalDiscover} />
        </section>
        <section className={styles.reading}>
          <header>
            <h2>Currently Reading</h2>
            <Link to="#">All</Link>
          </header>
          <main>
            <ReadingBook id="eLRhDgAAQBAJ" />
          </main>
        </section>
        <section className={styles.reviews}>
          <header>
            <h2>Reviews of The Days</h2>
            <Link to="#">All Video</Link>
          </header>
          <main>
            <CardVideo />
          </main>
        </section>
      </div>
      <NavigationBar />
    </>
  );
}