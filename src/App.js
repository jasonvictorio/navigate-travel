import React, { Component } from 'react'
import Day from './components/Day'

export class App extends Component {
  API = 'https://frontend-navigatetravel.ntstage.com/api';
  state = {
    days: [],
  };

  async componentDidMount () {
    // let response = await fetch('https://frontend-navigatetravel.ntstage.com/api');
    // let data = await response.json();
    // this.setState({ days: data})
    const dataFromApi = [{"date":"2020-02-01","dateText":"01 Feb","dateDay":"Sat","temperature":"29\u00b0C","products":[{"class":"Premier","status":"Available","price":"$510","priceWithDiscount":"$456"},{"class":"Premier Plus","status":"Last Spaces","price":"$580","priceWithDiscount":"$500"},{"class":"Catamaran","status":"Available","price":"$910","priceWithDiscount":"$830"}]},{"date":"2020-02-09","dateText":"09 Feb","dateDay":"Sun","temperature":"25\u00b0C","products":[{"class":"Premier","status":"Available","price":"$530","priceWithDiscount":"$473"},{"class":"Premier Plus","status":"Available","price":"$510","priceWithDiscount":"$500"},{"class":"Catamaran","status":"Available","price":"$830","priceWithDiscount":"$800"}]},{"date":"2020-02-15","dateText":"15 Feb","dateDay":"Sat","temperature":"23\u00b0C","products":[{"class":"Premier","status":"Last Spaces","price":"$500","priceWithDiscount":"$436"},{"class":"Premier Plus","status":"Last Spaces","price":"$622","priceWithDiscount":"$612"},{"class":"Catamaran","status":"Last Spaces","price":"$940","priceWithDiscount":"$900"}]},{"date":"2020-02-22","dateText":"01 Feb","dateDay":"Sat","temperature":"29\u00b0C","products":[{"class":"Premier","status":"Available","price":"$510","priceWithDiscount":"$456"},{"class":"Premier Plus","status":"Last Spaces","price":"$510","priceWithDiscount":"$500"},{"class":"Catamaran","status":"Available","price":"$510","priceWithDiscount":null}]},{"date":"2020-02-29","dateText":"01 Feb","dateDay":"Sat","temperature":"29\u00b0C","products":[{"class":"Premier","status":"Available","price":"$510","priceWithDiscount":"$456"},{"class":"Premier Plus","status":"Last Spaces","price":"$510","priceWithDiscount":"$500"},{"class":"Catamaran","status":"Available","price":"$510","priceWithDiscount":null}]},{"date":"2020-02-29","dateText":"01 Feb","dateDay":"Sat","temperature":"29\u00b0C","products":[{"class":"Premier","status":"Available","price":"$510","priceWithDiscount":"$456"},{"class":"Premier Plus","status":"Last Spaces","price":"$510","priceWithDiscount":"$500"},{"class":"Catamaran","status":"Available","price":"$510","priceWithDiscount":null}]},{"date":"2020-03-07","dateText":"01 Feb","dateDay":"Sat","temperature":"29\u00b0C","products":[{"class":"Premier","status":"Sold Out","price":"$510","priceWithDiscount":"$456"},{"class":"Premier Plus","status":"Last Spaces","price":"$510","priceWithDiscount":"$500"},{"class":"Catamaran","status":"Available","price":"$510","priceWithDiscount":null}]},{"date":"2020-03-14","dateText":"01 Feb","dateDay":"Sat","temperature":"29\u00b0C","products":[{"class":"Premier","status":"Available","price":"$510","priceWithDiscount":"$456"},{"class":"Premier Plus","status":"Last Spaces","price":"$510","priceWithDiscount":"$500"},{"class":"Catamaran","status":"Sold Out","price":"$533","priceWithDiscount":null}]},{"date":"2020-03-21","dateText":"01 Feb","dateDay":"Sat","temperature":"29\u00b0C","products":[{"class":"Premier","status":"Sold Out","price":"$510","priceWithDiscount":"$436"},{"class":"Premier Plus","status":"Last Spaces","price":"$510","priceWithDiscount":"$500"},{"class":"Catamaran","status":"Available","price":"$521","priceWithDiscount":null}]},{"date":"2020-03-28","dateText":"01 Feb","dateDay":"Sat","temperature":"29\u00b0C","products":[{"class":"Premier","status":"Limited","price":"$530","priceWithDiscount":"$436"},{"class":"Premier Plus","status":"Last Spaces","price":"$560","priceWithDiscount":"$530"},{"class":"Catamaran","status":"Sold Out","price":"$510","priceWithDiscount":"$499"}]},{"date":"2020-04-04","dateText":"01 Feb","dateDay":"Sat","temperature":"29\u00b0C","products":[{"class":"Premier","status":"Available","price":"$510","priceWithDiscount":"$456"},{"class":"Premier Plus","status":"Last Spaces","price":"$510","priceWithDiscount":"$500"},{"class":"Catamaran","status":"Sold Out","price":"$510","priceWithDiscount":"$456"}]},{"date":"2020-04-11","dateText":"01 Feb","dateDay":"Sat","temperature":"29\u00b0C","products":[{"class":"Premier","status":"Available","price":"$510","priceWithDiscount":"$456"},{"class":"Premier Plus","status":"Last Spaces","price":"$510","priceWithDiscount":"$500"},{"class":"Catamaran","status":"Available","price":"$510","priceWithDiscount":null}]}]
    this.setState({ days: dataFromApi})
  }

  render () {
    return (
      <div>
        app
        <Day />
      </div>
    )
  }
}

export default App
