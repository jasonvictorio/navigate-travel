import React, { Component } from 'react'

export class Product extends Component {
  render() {
    const { priceWithDiscount, price, status } = this.props.product

    return (
      <div>
        { priceWithDiscount }
        { price }
        { status }
      </div>
    )
  }
}

export default Product
