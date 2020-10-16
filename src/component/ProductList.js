import React from 'react';
import {Card}  from 'semantic-ui-react'
 import CartSummary from './cartSummery'
function ProductList({products}) {
    console.log(products)

  function mapProductsToItems(products){
   
    return products?products.map(product=>({
        header:product.name,
        description:product.description,
        image:product.image,
        meta:`₹${product.price}`,
        color:'teal',
        fluid:true,
        childkey:product._id,
       extra:(
           <CartSummary product={product} />
        )
    })):null
  
}

  return <Card.Group  fluid itemsPerRow ="2" centered items ={mapProductsToItems(products)}/>
}

export default ProductList;