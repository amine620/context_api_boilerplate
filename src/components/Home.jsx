import React, { useContext } from 'react'
import { context } from '../API/Provider'

export default function Home() {
    const {products}=useContext(context)
    return (
      <div className="container">
        <h1 className="text-center text-secondary">all products</h1>
        <div className="row">
            {products.map(product=>(
          <ul className="col-md-8 list-group mt-2">
            <li className="list-group-item bg-primary"><strong>title :</strong>  {product.title}</li>
            <li className="list-group-item"><strong>description :</strong>  {product.description}</li>
            <li className="list-group-item"><strong>photo :</strong>  {product.photo}</li>
          </ul>
            ))}
        </div>
      </div>
    );
}
