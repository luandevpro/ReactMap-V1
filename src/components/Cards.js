import React, { Component } from 'react';

class Cards extends Component {
    render() {
        const {property} = this.props;
        const { price, index, address, city, bedrooms, bathrooms, carSpaces, picture } = property;
        return <div id="card-0" className="cardd col-sm-12 col-md-6 col-lg-4 is-active">
            <img src={picture} alt={city} />
            <p className="price">${price}</p>
            <div className="details">
              <span className="index">{index + 1}</span>
              <p className="location">
                {city}
                <br />
                {address}
              </p>
              <ul className="features">
                <li className="icon-bed">
                  {bedrooms}
                  <span>bedrooms</span>
                </li>
                <li className="icon-bath">
                  {bathrooms}
                  <span>bathrooms</span>
                </li>
                <li className="icon-car">
                  {carSpaces}
                  <span>parking spots</span>
                </li>
              </ul>
            </div>
          </div>;
    }
}

export default Cards;