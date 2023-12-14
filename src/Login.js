import { useState,useContext } from "react"
import React  from 'react'
import {context} from './Context'





function Login(){

    const {setname,setprice,setquantity,setdiscription,setshowprofile}=useContext(context)
  

    return(
        
        < div>
            <div className='login-sec'>
                <div className='login-contaner'>
                    <form>
                        <h1>Login</h1>
                        <hr/>
                        <input type='text' placeholder='Enter Product Name'  onChange={(e)=>{
                            setname(e.target.value)
                        }}/><br/>
                        <input type='text' placeholder=' Price'  onChange={(e)=>{
                            setprice(e.target.value)
                        }}/><br/>
                        <input type='text' placeholder=' Quantity' onChange={(e)=>{
                            setquantity(e.target.value)
                        }}/><br/>
                        <input type='text' placeholder=' Discription' onChange={(e)=>{
                            setdiscription(e.target.value)
                        }}/>
                        <div className='log-btn'>
                            <button 
                            onClick={(e)=>{
                                e.preventDefault()
                                setshowprofile(true)
                            }}
                            >Submit</button>
                        </div>

                    </form>
                    
                </div>
            </div>
        </  div >
    )
}

export default Login;