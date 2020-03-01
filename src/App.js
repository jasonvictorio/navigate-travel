import React, { Component } from 'react'
import Day from './components/Day'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export class App extends Component {
  API = 'https://frontend-navigatetravel.ntstage.com/api';
  state = {
    days: [],
  };

  sliderSettings = {
    slidesToShow: 8,
    slidesToScroll: 8,
    arrows: false,
    appendDots: false,
    infinite: false,
    draggable: false,
  }

  async componentDidMount () {
    let response = await fetch('https://frontend-navigatetravel.ntstage.com/api');
    let data = await response.json();
    this.setState({ days: data})
  }

  render () {
    return (
      <div className="app">
        <div className="sidebar">
          <div className="logo">Our Prices&deg;</div>
          <ul className="categories">
            <li className="category">
              <div className="category-label">
                Premier
              </div>
            </li>
            <li className="category">
              <div className="category-label">
                Premier Plus
              </div>
             </li>
            <li className="category">
              <div className="category-label">
                Catamaran
              </div>
            </li>
          </ul>
        </div>
        <div className="sliderContainer">
          <button className="previous" onClick={() => this.slider.slickPrev()}></button>
          <Slider className="slider" ref={slider => (this.slider = slider)} {...this.sliderSettings}>
            { this.state.days.map(day => (<Day key={day.date} day={day} />))}
          </Slider>
          <button className="next" onClick={() => this.slider.slickNext()}></button>
        </div>
      </div>
    )
  }
}

export default App
