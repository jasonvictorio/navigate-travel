import React, { Component } from 'react'

export class Product extends Component {
  render() {
    return (
      <div>
        { this.props.product.priceWithDiscount }
        { this.props.product.price }
        { this.props.product.status }
      </div>
    )
  }
}

export default Product
