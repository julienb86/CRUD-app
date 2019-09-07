import React from 'react';

const Products = ({products}) => {
    return (
        <>
        <div className="justify-content-center">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Nom</th>
                <th scope="col">Prix</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody >
              {products.length > 0 ?(
                products.map(product => (
                  <tr>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>
                    <button className="btn btn-info">Modifier</button>
                    <button className="btn btn-danger">Supprimer</button>
                  </td>
                </tr>
                ))
              ) : (
                <tr>
                  <td className="text-center">Pas de produits</td>
                </tr>
              )}
            </tbody>

          </table>
        </div>
      </>
    );
}

export default Products;