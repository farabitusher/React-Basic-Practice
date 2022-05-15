
import './App.css';
import React, { useEffect, useState } from 'react';
import Country from './components/Country/Country';


function App() {
  const allPrice=[
    // {name:'Tusher',price:3400},
    // {name:'Ali hos',price:13400},
    // {name:'Fatabi',price:23300},
    // {name:'Usher',price:33400},
    // {name:'Vrr',price:34320}
  ]
  return (
    <div className="App">
      {
        allPrice.map(product=><Compo name={product.name} price={product.price}></Compo>)
      }
      <Country></Country>
      <Counter></Counter>
      <ExternalUsers></ExternalUsers>
    </div>
  );
}
function Compo(props){
  return(
    <div className="farabi-text">
      <h1>Hello there this is from React:{props.name}</h1>
      <h2>Price : {props.price}</h2>
    </div>
  )
}
function Counter() {
 const [count,setCount]=useState(34);
 const increaseCount =()=> setCount(count+1)
 const decreaseCount =()=>setCount(count-1)
  
  return(
    <div>
      <h1>Count :{count}</h1>
      <button onClick={increaseCount}>Increase</button>
     
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  ) 
}
function ExternalUsers(){
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data))
    // console.log(data);
  },[])
  return(
    <div>
      <h3>HEllO this is from useEffect</h3>
      <p>{users.length}</p>
      {
        users.map(user=><li>{user.username}</li>)
      }
      </div>
  )
}
export default App;
