import logo from './logo.svg';
import './App.css';
import Product from './Product';
import Login from './Login';
import React ,{context}from './Context'
import{useState}from 'react'

function App() {

   const [name,setname]=useState("")
    const [price,setprice]=useState("")
    const [quantity,setquantity]=useState("")
    const [discription,setdiscription]=useState("")
   const [showprofile,setshowprofile]=useState(false);
  return (
    <context.Provider  value={{name,setname,price,setprice,quantity,setquantity,discription,setdiscription,setshowprofile}}   className="App">
     {
      showprofile ?<Product />:<Login />
     }
    </context.Provider>
  );
}

export default App;
