import React from 'react';
import {Card}  from 'semantic-ui-react'
 import CharacterItem from './CharacterItem'
function ProductList({products}) {
    console.log(products)

  function mapProductsToItems(products){
  // console.log(products)
    return products?products.map(product=>({
        header:product.vehicle_type_code1,
        description:product.vehicle_type_code2,
        meta:`Crash Time :${product.crash_time}`,
        color:'teal',
        fluid:true,
        childkey:product.collision_id,
       extra:(
          <CharacterItem product={product} />
        )
    })):null
  
}

  return <Card.Group  fluid itemsPerRow ="2" centered items ={mapProductsToItems(products)}/>
}

export default ProductList;