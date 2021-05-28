import axios from 'axios';
import { useEffect, useState } from 'react';
import bookmarkIcon from '../../assets/icons/bookmark.svg';
import styles from './styles.module.scss';

interface Props {
  id: string
}

export default function ReadingBook({id}: Props) {
  const [book, setBook] = useState<any>({});
  
  useEffect(() => {
    axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`).then((response) => {
      setBook(response.data);
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    });
  }, [id]);

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src={
            book.volumeInfo?.imageLinks?.smallThumbnail ||
            book.volumeInfo?.imageLinks?.thumbnail
          }
          alt={book.volumeInfo?.title || ''}
        />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>
          <h2>{book.volumeInfo?.title || ''}</h2>
          <h3>{
            book.volumeInfo?.authors ? (
              `by ${book.volumeInfo?.authors[0]}`
            ) : 'No authors specified'
          }</h3>
        </div>
        <div className={styles.bookmark}>
          <img src={bookmarkIcon} alt="Bookmark" />
          <span>Chapter <span className={styles.chapterNumber}>2</span> From 9</span>
        </div>
      </div>
    </div>
  );
}
