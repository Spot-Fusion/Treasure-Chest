import React, { Component } from 'react';
import Geocoder from 'react-native-geocoding';
import GoogleStaticMap, {Marker} from 'react-native-google-static-map';
import { Text } from 'react-native';

export default class StaticMap extends Component {
  constructor(props) {
    super(props);
    this.state = {coords: undefined};

    this.test = this.test.bind(this);
  }
  componentDidMount() {
    this.test();
  }

  test () {
    Geocoder.init("AIzaSyA8ir6Fp244pQxaXhw3A6yxa9lkpQBndXs");
    console.log(this.props.zip)
    Geocoder.from(`${this.props.zip}`)
      .then(json => {
        let location = json.results[0].geometry.location;
        this.setState({
          coords: location
        })
      })
      .catch(error => console.log(error));
  }

  render() {  
    const { coords } = this.state;
    let lat = '32.064171';
    let lng = '34.7748068';
    if(coords){
      lat = coords.lat.toString();
      lng = coords.lng.toString();
    }else{
      return <Text>Loading Map...</Text>
    }
    
    return (
        <GoogleStaticMap
          latitude={lat}
          longitude={lng}
          zoom={13}
          size={{ width: 350, height: 350 }}
          apiKey={'AIzaSyA8ir6Fp244pQxaXhw3A6yxa9lkpQBndXs'}
      />
    );
  }
}