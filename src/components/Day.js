import React, { Component } from 'react'
import Product from './Product'

export class Day extends Component {
  render() {
    const { dateText, dateDay, temperature, products } = this.props.day

    return (
      <div>
        { dateText }
        { dateDay }
        { temperature }
        <Products products={products} />
      </div>
    )
  }
}

function Products (props) {
  return props.products.map(product => (<Product key={product.class} product={product} />))
}

export default Day
