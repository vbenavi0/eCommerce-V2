import Product from './product';

import React, { Component } from 'react'

export default function mapProds(props){
    return (
      <div>
        {props.prods.map((product) => <Product pId = {product.prod_id} pName = {product.prod_name} pDesc = {product.prod_desc} pImg = {product.prod_img} pPrice = {product.prod_price}/>)}
      </div>
    )
}