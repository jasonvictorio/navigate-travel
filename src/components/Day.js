import React, { Component } from 'react'
import Product from './Product'

export class Day extends Component {
  render() {
    return (
      <div>
        { this.props.day.dateText }
        ({ this.props.day.dateDay })
        { this.props.day.temperature }
        <Products products={this.props.day.products} />
      </div>
    )
  }
}

function Products (props) {
  return props.products.map(product => (<Product key={product.class} product={product} />))
}

export default Day
