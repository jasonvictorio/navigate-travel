import React, { Component } from 'react'
import Product from './Product'

export class Day extends Component {
  render() {
    const { dateText, dateDay, temperature, products } = this.props.day

    return (
      <div style={this.styles.day}>
        <div style={this.styles.date}>
          <span>{ dateText }</span>
          <span>{ dateDay }</span>
        </div>
        <div style={this.styles.temperature}>
          { temperature }
        </div>
        <div style={this.styles.products}>
          <Products products={products} />
        </div>
      </div>
    )
  }

  styles = {
    day: {
      padding: '0 5px',
    },
    date: {
      color: '#A5A6A6',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    temperature: {
      color: '#FFFFFF',
      backgroundColor: '#E34B31',
      borderRadius: '5px',
      textAlign: 'center',
    },
    products: {
    },
  }
}

function Products (props) {
  return props.products.map(product => (<Product key={product.class} product={product} />))
}

export default Day
