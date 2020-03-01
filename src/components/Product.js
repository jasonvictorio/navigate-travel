import React, { Component } from 'react'

export class Product extends Component {
  render() {
    const { priceWithDiscount, price, status } = this.props.product

    return (
      <div>
        <div className="stubTop">
          <div className="discount">
            { priceWithDiscount }
          </div>
          <div className="price">
            { price }
          </div>
          </div>
        <div className="stubBottom" style={this.styles.stubBottom}>
          { status }
        </div>
      </div>
    )
  }

  statusColor = {
    'Available': '#A5A5A5',
    'Last Spaces': '#DB9057',
    'Sold Out': '#F40058',
  }

  styles = {
    stubBottom: {
      border: this.props.product.status === 'Sold Out'
        ? 'none'
        : '1px solid #DDDDDD',
      color: this.statusColor[this.props.product.status],
    },
  }
}

export default Product
