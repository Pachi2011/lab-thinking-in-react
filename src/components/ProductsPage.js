
import { useState } from 'react';
import jsonData from '../data.json'
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  const [showInStockOnly, setShowInStockOnly] = useState(true);

  function handleSearch(userInput) {

    if (!userInput) {
        setProducts(jsonData)
    }
    else{

        const filteredProducts = jsonData.filter((productIndividual)=>{
            return productIndividual.name.toLowerCase().includes(userInput.toLowerCase())
        })
        setProducts(filteredProducts)
    }

  }
  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar handleSearch={handleSearch}/>
       <ProductTable products={products}/> 
      
      </div>    
  )

}


export default ProductsPage;