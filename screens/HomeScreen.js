import * as React from 'react';
import { Image, Platform, StyleSheet, TouchableOpacity, View, Text, Button, FlatList, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import CustomHeader from '../components/CustomHeader';
import axios from 'axios';

const HomeScreen = ({ route, navigation }) => {
  const [listings, setListings] = React.useState([])
  console.log(route.params);

  let url = '10.0.2.2';

  const getAllListings = async () => {
    await axios.get(`http://${url}:8080/listing/`)
      .then(post => setListings(post.data))
      .catch(e => console.error(e));
   }

   React.useEffect(() => {
      getAllListings();
   }, [])

   console.log(listings);

  return (
    <View style={[styles.container, {marginTop: 23,}]}>
      <CustomHeader navigation={navigation} title="Home"/>
      <TouchableOpacity style={{marginVertical: 5, backgroundColor: '#3FC184', height: 75, width: 75, borderRadius: 150, alignSelf: 'center'}} onPress={() => navigation.navigate('Create Listing')}>
        <Text style={{fontSize: 50, alignSelf: 'center'}}>+</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <FlatList
          style={{padding: 3}}
          numColumns={2}
          data={listings}
          renderItem={({ item }) => <TouchableOpacity style={{alignContent: 'center'}} 
          onPress={() => navigation.navigate('ShowListing', { idListing: item.id })}>
            <ImageBackground style={{height: 175, width: 210, border: 'solid 5px white'}} source={{ uri: item.image }}>
              <Text style={{ position: 'absolute', bottom: 0, left: 0, backgroundColor: 'gray', color: '#F1F3F5', }}>{`$${item.price}`}</Text>
            </ImageBackground>
            </TouchableOpacity>}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F3F5',
    justifyContent: 'center',
    alignContent: 'center'
  },
  text: {
    marginBottom: 20,
    color: 'rgba(96,100,109, 0.8)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

export default HomeScreen;

// import * as React from 'react';
// import {Image, Platform, StyleSheet, TouchableOpacity, View, Text, Button, FlatList, ScrollView, StatusBar } from 'react-native';
// import RecommendedCardItems from '../components/recommendedCardItems';
// import ViewPagerAndroid from "@react-native-community/viewpager";
// // import {Container, Content, Header, Left, Right, Icon, Item, Input, Card, CardItem} from 'native-base';
// import FAIcon from 'react-native-vector-icons/FontAwesome';
// import CustomHeader from '../components/CustomHeader';
// import { TextInput } from 'react-native-gesture-handler';
// import { Ionicons } from '@expo/vector-icons';
// // import Swiper from 'react-native-swiper';


// const HomeScreen = ({ route, navigation }) => {
//   console.log(route.params);
  
//   return (
//     <ScrollView>
//       <CustomHeader />
//       {/* <Header style={[{ backgroundColor: '#3a455c', 
//       height: 90, borderBottomColor: '#757575'}, styles.androidHeader]}>
//         <Left style = {{flexDirection: 'row'}}>
//           <Icon name = "md-menu" style = {{color: 'white', marginRight: 15}}></Icon>
//         <FAIcon name='amazon' style={{ fontSize: 32, color: 'white' }}></FAIcon>
//         </Left>
//         <Right>
//           <Icon name = 'md-cart' style = {{ color: 'white'}}></Icon>
//         </Right>
//       </Header> */}
//       <View
//       style = {{position: 'absolute', left: 0, right:0, top:90, height:70, backgroundColor: '#3a455c', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 5}}>
//         <TouchableOpacity>
//           <View
//           style = {{width: 100, backgroundColor: '#e7e7eb', height: 50, borderRadius: 4, padding: 10 }}>
//             <Text style = {{fontSize: 12}}>SHOP BY</Text>
//             <Text style = {{fontWeight:'bold'}}> Category</Text>
//           </View>
//         </TouchableOpacity>
//         <View style = {{flex:1, height: '100%', marginLeft: 5, justifyContent: 'center'}}></View>
//         {/* <Item style = {{backgroundColor: 'white', paddingHorizontal: 10, borderRadius: 4}}> */}
//           <Ionicons name = 'md-search' style = {{
//             fontSize: 20, paddingTop:5 }} />
//             <TextInput placeholder = "Search"></TextInput>
//         {/* </Item> */}
//       </View>
//       <View style = {{backgroundColor: '#d5d5d6', marginTop: 70}}>
//         <View style={{ height: 50, backgroundColor: 'white', flexDirection: 'row', paddingHorizontal: 5, alignItems: 'center', justifyContent: 'space-between'}}>
//           <Text>Hello, Mr.Johnson</Text>
//           <View style = {{flexDirection: 'row'}}>
//             <Text>Your Account </Text>
//             <Ionicons name = 'md-arrow-forward' style = {{fontSize:18}} />
//           </View>
//         </View>
//         <ViewPagerAndroid
//             autoplay = {true}
//             style = {{height:100}}>
//               <View style = {{flex:1}}>
//             <Image style={{ flex: 1, height: null, width: null, resizeMode: 'contain' }} source={require('../assets/images/robot-dev.png')}></Image>
//               </View>
//               <View style={{ flex: 1 }}>
//             <Image style={{ flex: 1, height: null, width: null, resizeMode: 'contain' }} source={require('../assets/images/robot-dev.png')}></Image>
//               </View>
//               <View style={{ flex: 1 }}>
//             <Image style={{ flex: 1, height: null, width: null, resizeMode: 'contain' }} source={require('../assets/images/robot-dev.png')}></Image>
//               </View>
//         </ViewPagerAndroid>
//         {/* <Card>
//           <CardItem
//            header>
//              <Text> Your Recommendations</Text>
//            </CardItem>
//           <RecommendedCardItems
//           itemName ="You Cna heal your life"
//           itemCreator = "Louise Hay"
//           itemPrice ="$10"
//           savings = "2.5"
//           imageUrl = {require('../assets/images/robot-prod.png')}
//           ratings = {5} >
//           </RecommendedCardItems>
//         </Card> */}
//       </View>
      
//     </ScrollView>
    
//   );

// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     alignContent: 'center'
//   },
//   androidHeader: {
//     ...Platform.select({
//       android: {
//         paddingTop: StatusBar.currentHeight,
//       }
//     })
//   },
//   text: {
//     marginBottom: 20,
//     color: 'rgba(96,100,109, 0.8)',
//     fontSize: 14,
//     lineHeight: 19,
//     textAlign: 'center',
//   },
//   contentContainer: {
//     paddingTop: 30,
//   },
//   welcomeContainer: {
//     alignItems: 'center',
//     marginTop: 10,
//     marginBottom: 20,
//   },
//   welcomeImage: {
//     width: 100,
//     height: 80,
//     resizeMode: 'contain',
//     marginTop: 3,
//     marginLeft: -10,
//   },
//   getStartedContainer: {
//     alignItems: 'center',
//     marginHorizontal: 50,
//   },
//   homeScreenFilename: {
//     marginVertical: 7,
//   },
//   codeHighlightText: {
//     color: 'rgba(96,100,109, 0.8)',
//   },
//   codeHighlightContainer: {
//     backgroundColor: 'rgba(0,0,0,0.05)',
//     borderRadius: 3,
//     paddingHorizontal: 4,
//   },
//   getStartedText: {
//     fontSize: 17,
//     color: 'rgba(96,100,109, 1)',
//     lineHeight: 24,
//     textAlign: 'center',
//   },
//   tabBarInfoContainer: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     ...Platform.select({
//       ios: {
//         shadowColor: 'black',
//         shadowOffset: { width: 0, height: -3 },
//         shadowOpacity: 0.1,
//         shadowRadius: 3,
//       },
//       android: {
//         elevation: 20,
//       },
//     }),
//     alignItems: 'center',
//     backgroundColor: '#fbfbfb',
//     paddingVertical: 20,
//   },
//   tabBarInfoText: {
//     fontSize: 17,
//     color: 'rgba(96,100,109, 1)',
//     textAlign: 'center',
//   },
//   navigationFilename: {
//     marginTop: 5,
//   },
//   helpContainer: {
//     marginTop: 15,
//     alignItems: 'center',
//   },
//   helpLink: {
//     paddingVertical: 15,
//   },
//   helpLinkText: {
//     fontSize: 14,
//     color: '#2e78b7',
//   },
// });

// export default HomeScreen;
