import { useEffect, useState } from 'react';
import axios from 'axios';
import chartIcon from '../../assets/icons/chart.svg';
import styles from './styles.module.scss';

interface Props {
  background: string;
  id: string;
}

export default function DiscoverBook({background, id}: Props) {
  const [book, setBook] = useState<any>({});

  useEffect(() => {
    axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`).then((response) => {
      setBook(response.data);
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    });
  }, []);
  
  return (
    <div className={styles.paddingContainer}>
      <div className={styles.container} style={{
        background: background
      }}>
        <div className={styles.info}>
          <h2>{book.volumeInfo?.title || ''}</h2>
          <h3>{
            book.volumeInfo?.authors ? (
              book.volumeInfo?.authors[0]
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
              src={
                book.volumeInfo?.imageLinks?.smallThumbnail ||
                book.volumeInfo?.imageLinks?.thumbnail
              }
              alt={book.volumeInfo?.title || ''}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
