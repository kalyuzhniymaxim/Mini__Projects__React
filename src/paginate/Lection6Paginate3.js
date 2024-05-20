import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

import  "./paginate.css"

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleItems, setVivsibleItems] = useState(10);
  const containerRef = useRef(null);

  const showMoreItems = () => {
    setVivsibleItems((prevVisibleItems) => prevVisibleItems + 10)
}

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

const handleScroll = () => {
    if(containerRef.current && containerRef.current.scrollTop + containerRef.current.clientHeight >= containerRef.current.scrollHeight){
        showMoreItems()
    }
}

useEffect(() => {
    if(containerRef.current) {
        containerRef.current.addEventListener("scroll" , handleScroll)
    }
    return () => {
        if(containerRef.current){
            containerRef.current.removeEventListener("scrol", handleScroll)
        }
    }
},[])

  return (
    <div className='App' ref={containerRef}>
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

    </div>
  );
}
export default App;
