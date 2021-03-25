import React,{useState, useEffect} from 'react';
import './App.css';

const App =()=> {
  const[items, setItems] = useState([]);
  const[visible, setVisible] = useState(3);
  const showMoreItem = ()=>{
      setVisible((prevValue) => prevValue+3);

      
  }
  useEffect(() => {
     fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) =>  setItems(data));

  },[])
  return (
    <div className="App">
        <div className='container'>
          {items.slice(0,visible).map((item)=>{
            return(
              <div className='card'>
                <div className='id'><span>{item.id}</span></div>
                <p> {item.body} </p>
              </div>
            )
          })}
          
          <button onClick={showMoreItem}>Load More</button>
         
        </div>
    </div>
  );
}

export default App;
