import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleItems, setVivsibleItems] = useState(10);



  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Ошибка при загрузке данных ', error);
        setIsLoading(false);
      });
  }, []);

const showMoreItems = () => {
    setVivsibleItems((prevVisibleItems) => prevVisibleItems + 10)
}

  const paginate = (pageNumber) => pageNumber;

  return (
    <div>
      <h1> Загрузка данных</h1>
      {isLoading ? (
        <p>Загрузка данных ...</p>
      ) : (
        <ul>
          {data.slice(0, visibleItems).map((item) => (
            <li key={item.id}>
              {item.userId} {item.title}
            </li>
          ))}
        </ul>
      )}
{visibleItems < data.length && (
    <button onClick={showMoreItems}>Показать ещё</button>
)}
    </div>
  );
}
export default App;
