import axios from 'axios';
import { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { useHistory } from 'react-router-dom';
import arrowLeftIcon from '../../assets/icons/arrow-left.svg';
import DetailMenu from '../../components/DetailMenu';
import styles from './styles.module.scss'

interface Params {
  id: string;
}

export default function Detail({ match }: RouteComponentProps<Params>) {
  const history = useHistory();
  
  const [book, setBook] = useState<any>({});

  function goBack() {
    history.goBack();
  }

  useEffect(() => {
    document.body.style.overflowY = 'hidden';

    return () => {
      document.body.style.overflowY = 'initial';
    }
  }, []);

  useEffect(() => {
    axios.get(`https://www.googleapis.com/books/v1/volumes/${match.params.id}`).then((response) => {
      setBook(response.data);
    }).catch((error) => {
      console.log(error);
    });
  }, [match.params.id]);
  
  return (
    book.volumeInfo ? (
      <div className={styles.container}>
        <div className={styles.topBar}>
          <div className={styles.backButtonContainer}>
            <button onClick={goBack}>
              <img src={arrowLeftIcon} alt="Back" />
            </button>
          </div>
          <div className={styles.imageContainer}>
            <img
              src={
                (
                  book.volumeInfo && (
                    book.volumeInfo.imageLinks && (
                      book.volumeInfo.imageLinks.smallThumbnail ||
                        book.volumeInfo.imageLinks.thumbnail || ''
                    )
                  )
                )
              }
              alt={book.title}
            />
          </div>
        </div>
        <h1 className={styles.title}>
          <strong>{book.volumeInfo.title}</strong>
          { book.volumeInfo.subtitle && ` : ${book.volumeInfo.subtitle}` }
        </h1>
        <h2 className={styles.author}>{
          book.volumeInfo.authors ? book.volumeInfo.authors[0] : 'No authors specified'
        }</h2>
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{
            __html: book.volumeInfo.description || ''
          }}
        />
        <DetailMenu />
      </div>
    ) : <h1 className={styles.loading}>Loading...</h1>
  );
}