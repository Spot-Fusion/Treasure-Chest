import React, { Component } from 'react';
import { View, Text, Stylesheet, Image} from 'react-native';
import {Card, CardItem, Right} from 'native-base';
class RecommendedCardItems extends Component {
  render (){
    return (
      <CardItem>
        <View>
          <Image style = {{ height: 90, width: 90}}
            source={this.props.imageUrl}></Image>
        </View>
      </CardItem>
    )
  }
}

export default RecommendedCardItems;