import React, {useState} from 'react';

const AddProduct = ({createProduct}) =>{

    const [product, setProduct] = useState({})
    
    const handleSubmit = (e) => {
        e.preventDefault();
        createProduct();
      };
  
      const handleChange = event => {
        const {name, value} = event.target;
        setProduct({...product, [name]: value});
      }
  
    return (
        <form className="justify-content-center row" onSubmit={handleSubmit}>
          <div className="form-group">
            <label 
              htmlFor="name">
                Nom
            </label>
            <input 
              type="text" 
              className="form-control" 
              id="name" name="name" 
              value={product.name} 
              onChange={handleChange} 
              placeholder="Nom du produit"/>
            <label 
              htmlFor="price">
                Prix
            </label>
            <input 
              type="text" 
              name="price" 
              value={product.price} 
              onChange={handleChange} 
              className="form-control" 
              id="price" 
              placeholder="Prix"/>
            <label 
              htmlFor="price">
                Type
            </label>
            <input 
              type="text" 
              name="type" value={product.type} 
              onChange={handleChange} 
              className="form-control" 
              id="type" 
              placeholder="Type"/>
            <button 
            onClick={createProduct} 
            type="submit" 
            className="btn btn-success form-control my-4">
                Ajouter
            </button>
          </div>
        </form>
    );
}

export default AddProduct;