import React, { Component } from 'react'

export class Product extends Component {
  render() {
    const { priceWithDiscount, price, status } = this.props.product

    return (
      <div>
        <div style={this.styles.stubTop}>
          <div style={this.styles.discount}>
            { priceWithDiscount }
          </div>
          <div style={this.styles.price}>
            { price }
          </div>
          </div>
        <div style={this.styles.stubBottom}>
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
    stubTop: {
      textAlign: 'center',
      borderTopLeftRadius: '20px',
      borderTopRightRadius: '20px',
      border: '1px solid #DDDDDD',
      borderBottom: '1px dashed #DDDDDD',
    },
    stubBottom: {
      textAlign: 'center',
      borderBottomLeftRadius: '20px',
      borderBottomRightRadius: '20px',
      border: this.props.product.status == 'Sold Out'
        ? 'none'
        : '1px solid #DDDDDD',
      borderTop: 'none',
      color: this.statusColor[this.props.product.status],
    },
    discount: {
      color: '#A5A5A5',
    },
    price: {
      color: '#F40058',
    }
  }

}

export default Product
