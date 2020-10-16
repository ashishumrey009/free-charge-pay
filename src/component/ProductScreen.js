import React, { useEffect, useState } from 'react'
import axios from 'axios'

import ProductList from './ProductList'

import { Container, Header } from 'semantic-ui-react'
const Product =()=>{
    const [recipeData,setRecipeData] = useState()
    useEffect(()=>{
        axios.get('http://starlord.hackerearth.com/recipe').
        then(res=>{
            console.log(res.data)
            setRecipeData(res.data)
        })
        
        .catch((err)=>console.log(err))
    },[])
    return(
        
        <div  className="App">
             <Header as='h1'>All Recipes</Header>
             <Container text><ProductList  products ={recipeData} /></Container>
        </div>
    )
}
export default Product