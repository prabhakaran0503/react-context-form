import React,{useState,useContext}  from 'react'
import {context} from './Context'


function Product(){
    const {name,price,quantity,discription}=useContext(context)
    return(
        <div>
            <div className='product-sec'>
                <div className='product-contanear'>
                    <div className='product-col'>
                        <div className='product-img'>
                            <img src='img/img2.jpg' />
                        </div>
                        <h1>Product: {name}</h1>
                        <h1>Price: {price}</h1>
                        <h1>Quantity: {quantity}</h1>
                        <h1>Discription: {discription}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;