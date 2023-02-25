import React from 'react'
import ProductRow from './ProductRow'
// import ProductRow from './ProductRow'

function ProductTable(props) {
    console.log(props.products)
  return (
   <table>
    <tr>
      <th>Name</th>
      <th>Price</th>
      <th>Category</th>
    </tr>
    {props.products.map((productIndividual)=> {
        return(
            
                <ProductRow key={productIndividual.id} products={productIndividual}/>

           
        )
    })}
    </table>
   )
  
}

export default ProductTable