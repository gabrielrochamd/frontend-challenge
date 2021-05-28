import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from '../../components/NavigationBar'
import searchIcon from '../../assets/icons/search.svg';
import styles from './styles.module.scss'
import axios from 'axios';

export default function Search() {
  const [books, setBooks] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [query, setQuery] = useState('');
  const searchInput = useRef<HTMLInputElement>(null);

  function handleChangeQuery(event: React.ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
  }

  function search(event: React.FormEvent) {
    axios.get('https://www.googleapis.com/books/v1/volumes', {
      params: {
        q: query,
        maxResults: 12,
        startIndex: currentIndex,
        key: 'AIzaSyCYU7-ibxKA3GEZARz7rnU8fYVFrVrB9fg'
      }
    }).then((response) => {
      setBooks(response.data.items);
    }).catch((error) => {
      console.log(error);
    });
    event.preventDefault();
  }

  function loadMore(event: React.FormEvent) {
    axios.get('https://www.googleapis.com/books/v1/volumes', {
      params: {
        q: query,
        maxResults: 12,
        startIndex: currentIndex,
        key: 'AIzaSyCYU7-ibxKA3GEZARz7rnU8fYVFrVrB9fg'
      }
    }).then((response) => {
      setBooks(previous => {
        return [...previous, ...response.data.items];
      });
    }).catch((error) => {
      console.log(error);
    });
    event.preventDefault();
  }

  useEffect(() =>  {
    document.body.style.background = '#fffcf9';
    searchInput.current?.focus();

    return () => {
      document.body.style.background = '#fff';
    }
  }, []);

  useEffect(() => {
    setCurrentIndex(currentIndex => {
      return currentIndex + 12;
    });
  }, [books]);
  
  return (
    <>
      <div className={styles.container}>
        <form onSubmit={search}>
          <label className={styles.inputContainer} htmlFor="query">
            <img src={searchIcon} alt="Search" />
            <input
              id="query"
              name="query"
              onChange={handleChangeQuery}
              placeholder="Search book"
              ref={searchInput}
              type="text"
              value={query}
            />
          </label>
        </form>
        <div className={styles.bookList}>
          {
            books.map((book: any, index) => {
              return (
                <Link className={styles.book} key={index} to={`detail/${book.id}`}>
                  <div className={styles.imageContainer}>
                    <img
                      className={styles.image}
                      src={
                        book.volumeInfo?.imageLinks?.smallThumbnail ||
                        book.volumeInfo?.imageLinks?.thumbnail
                      }
                      alt={book.title}
                    />
                  </div>
                  <div className={styles.title}>{book.volumeInfo.title}</div>
                  <div className={styles.author}>
                    {
                      book.volumeInfo.authors ? (
                        `by ${book.volumeInfo.authors[0]}`
                      ) : ''
                    }
                  </div>
                </Link>
              );
            })
          }
        </div>
        {
          books.length > 0 && (
            <div className={styles.loadMoreContainer}>
              <button className={styles.loadMoreButton} onClick={loadMore}>Load more</button>
            </div>
          )
        }
      </div>
      <NavigationBar />
    </>
  );
}