import React from 'react'

function ProductRow(props) {
    console.log(props.products)
  return (
    <div>
        <tr>
            <td className={props.products.inStock ? "" : "outOfStock"}>{props.products.name}</td>
            <td>{props.products.price}</td>
            <td>{props.products.category}</td>
        </tr>
    </div>
  )
}

export default ProductRow