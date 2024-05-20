import React, { useEffect, useState } from 'react';

// class List extends React.Component {
// state = {
//     numbers:[1,2,3]
// };

// addRandomNumber = () => {
//         const randNumber = Math.round(Math.random() * 100);
//     this.setState({
//         numbers : [...this.state.numbers, randNumber]
//     })
// }
// componentDidMount(){
//     console.log('Компонент был отоброжён')
// }
// componentDidUpdate(prevProps, prevState) {
//     if (this.state.numbers.length !== prevState.numbers.length) {
//         console.log('список чисел обновился')
//     }
// }
// componentWillUnmount(){
//     console.log('Компонент будет удалён')
// }

//     render() {
//         return (
//                 <div>
//                   <ul>
                  
//                     {this.state.numbers.map((num, ind) => (
//                       <li key={ind}>{num}</li>
//                     ))}
//                   </ul>
//                   <button onClick={this.addRandomNumber}>Новое число</button>
//                 </div>
//               );
//     }
// }
const List = () => {
  const [numbers, setNumbers] = useState([1, 444, 4]);
  const addNumber = () => {
    const randNumber = Math.round(Math.random() * 100);
    const newArr = [...numbers, randNumber];
    setNumbers(newArr);
  };

  useEffect(() => {
console.log('Компонент был отоброжён')
return () => {
    console.log('Компонент был удалён')
}
  },[])
  useEffect(() => {
    console.log('Компонент был изменён')

      },[numbers])



  return (
    <div>
      <ul>
        {numbers.map((num, ind) => (
          <li key={ind}>{num}</li>
        ))}
      </ul>
      <button onClick={addNumber}>Новое число</button>
    </div>
  );
};

export default List;
