import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import Lection2UseRef from './Lection2UseRef';
// import Lection2UseRef2 from './Lection2UseRef2';
// import LectionUseMemo from './LectionUseMemo';
import Paginate from './paginate/Lection6Paginate';
import Paginate2 from './paginate/Lection6Paginate2';
import Paginate3 from './paginate/Lection6Paginate3';
// import App from './LectionUseEffect';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Paginate3 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
