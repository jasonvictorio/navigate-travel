import React, { Component } from 'react'
import Product from './Product'

export class Day extends Component {
  render() {
    const { dateText, dateDay, temperature, products } = this.props.day

    return (
      <div className="day">
        <div className="date">
          <span>{ dateText }</span>
          <span>({ dateDay })</span>
        </div>
        <div className="temperature">
          { temperature }
        </div>
        <div className="products">
          <Products products={products} />
        </div>
      </div>
    )
  }
}

function Products (props) {
  return props.products.map(product => (<Product key={product.class} product={product} />))
}

export default Day
