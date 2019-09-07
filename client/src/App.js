import React, {useState, useEffect} from 'react';
import Products from './components/Products'
import AddProduct from './components/AddProduct'


function App() {

  const [products, setProducts] = useState([]);

  const url = "http://localhost:3000/api/products";

  const fetchProducts = async() =>{
      let response = await fetch(url);
      let data = await response.json();
      setProducts(data);
    };

    useEffect( () => {
      fetchProducts();
    }, []);


    const createProduct = () => {
      try{
        fetch("http://localhost:3000/api/products", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({...products})
      })
      .then(res => res.text())
      .then(res => console.log(res));
      
      }catch(err){
        console.log(err);
      }
    }

  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center my-5">Nos produits</h1>
        <div className="row">
          <div className="col-md-6">
            <h3 className="text-center">Créer un produit</h3>
            <AddProduct createProduct={createProduct}/>
          </div>
          <div className="col-md-6">
            <h3 className="text-center">Liste de produits</h3>
            <Products products={products}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
