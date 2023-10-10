import React, { Component } from 'react';
import data from '../../data/data.json';

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: data,
      // selectedImage: {},
    };
  }

  render() {
    const { images } = this.state;

    return (
      <div className='container'>
        <div className='row'>
          {images.map((item) => (
            <div className='col-md-4' key={item.id}>
              <div className='card'>
                <img
                  src={item.link} // Set the src attribute to the image URL from your JSON data
                  className='card-img-top'
                  alt={item.name}
                />
                <div className='card-body'>
                  <h5 className='card-title'>{item.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
