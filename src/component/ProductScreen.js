import React, { useEffect, useState } from 'react'
import axios from 'axios'

import ProductList from './ProductList'

import { Container, Header } from 'semantic-ui-react'
const Product =()=>{
    const [carData,setCarData] = useState()
    useEffect(()=>{
        axios.get('https://data.cityofnewyork.us/resource/h9gi-nx95.json').
        then(res=>{
            console.log(res.data)
            setCarData(res.data)
        })
        
        .catch((err)=>console.log(err))
    },[])
    return(
        
        <div  className="App">
             <Header as='h1'>All CARS</Header>
             <Container text><ProductList  products ={carData} /></Container>
        </div>
    )
}
export default Product