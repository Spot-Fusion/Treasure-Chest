// import * as React from 'react';
// import { StyleSheet, Text, View, Button } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { RectButton, ScrollView } from 'react-native-gesture-handler';
// import * as Google from 'expo-google-app-auth';
// import HomeScreen from './HomeScreen'

//  class GoogleAuthScreen extends React.Component{
//    constructor(props){
//      super(props)
//      this.state = {
//       signedIn: false,
//       name: '',
//       ImageUrl: ""
//      }
     
//    };


//    signIn = async function signInWithGoogleAsync() {
//      try {
//        const result = await Google.logInAsync({
//          androidClientId: "684227107653 - 7iva6mldse1ja8cl6l40manvkf6jvkt9.apps.googleusercontent.com",
//          scopes: ['profile', 'email'],
//        });

//        if (result.type === 'success') {
//          this.setState({
//            signedIn: true,
//            name: result.user.name,
//            ImageUrl: result.user.photo
//          })
//        } else {
//          console.log('user cancelled')
//          //return { cancelled: true };
         
//        }
//      } catch (e) {
//        console.log('user not valid', e)
//        //return { error: true };
//      }
//     }
//   render(){
//   return (   
//       <View style={styles.view}>
//         <Text style={styles.text}>LogIn Screen Here</Text>
//         {this.state.signIn ? (
//           <HomeScreen name = {this.state.name} Imageurl = {this.state.ImageUrl}></HomeScreen>
//         ) : (
//           <GoogleAuthScreen signIn= {this.signIn}></GoogleAuthScreen>
//         )}
//         <Button title="Login with Google" onPress={() => navigation.navigate('Home')} />
//       </View>
//   );
//     }
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fafafa',
//   },
//   contentContainer: {
//     paddingTop: 15,
//   },
//   optionIconContainer: {
//     marginRight: 12,
//   },
//   view: {
//     backgroundColor: '#fdfdfd',
//     paddingHorizontal: 15,
//     paddingVertical: 15,
//     borderWidth: StyleSheet.hairlineWidth,
//     borderBottomWidth: 0,
//     borderColor: '#ededed',
//     justifyContent: 'center',
//     alignContent: 'center'
//   },
//   lastOption: {
//     borderBottomWidth: StyleSheet.hairlineWidth,
//   },
//   text: {
//     fontSize: 15,
//     alignSelf: 'flex-start',
//     marginTop: 1,
//   },
// });

// export default GoogleAuthScreen
// ;
