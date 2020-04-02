import * as React from 'react';
import { Button, Image, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { CLOUDINARY_URL } from '../config';

const ExpoImagePicker = ({ chooseImage }) => {
  const [image, setImage] = React.useState(null);
  const [photo, setPhoto] = React.useState('');



  const  getPermissionAsync = async () => {
    // let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
    //   if (permissionResult.granted === false) {
    //     alert('Permission to access camera roll is required!');
    //     return;
      if (Constants.platform.ios) {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    }

  React.useEffect(() => {
    getPermissionAsync();
    console.log('hi');
}, [])

const _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      base64: true,
    });

    console.log(chooseImage);

    if (!result.cancelled) {
      setImage(result.uri);
      let base64Img = result.uri; //`data:image/jpg;base64,${result.base64}`;
      let data = {
        "file": base64Img,
        "upload_preset": "ml_default",
      }
      fetch(CLOUDINARY_URL, {
        body: JSON.stringify(data),
        headers: {
          'content-type': 'application/json'
        },
        method: 'POST',
      }).then(async r => {
        let data = await r.json()
        setPhoto(data.url)
        chooseImage(data.url);
      }).catch(err => console.error(err))
    }
  };

  // console.log(photo);

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/* {image &&
          <Image source={{ uri: image }} style={{ width: 100, height: 100, borderRadius: 50 }} />} */}
          <Button
            color={'#3FC184'}
            title="Pick an image"
            onPress={_pickImage}
          />
      </View>
    );
  
}

export default ExpoImagePicker;

// const cloud = async () => {
//   let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
//   if (permissionResult.granted === false) {
//     alert('Permission to access camera roll is required!');
//     return;
//   }
//   let pickerResult = await ImagePicker.launchImageLibraryAsync({
//     allowsEditing: true,
//     aspect: [4, 3],
//     base64: true
//   });
//   if (pickerResult.cancelled === true) {
//     return;
//   }
//   let base64Img = `data:image/jpg;base64,${pickerResult.base64}`;
//   let data = {
//     "file": base64Img,
//     "upload_preset": "ml_default",
//   }
//   fetch(CLOUDINARY_URL, {
//     body: JSON.stringify(data),
//     headers: {
//       'content-type': 'application/json'
//     },
//     method: 'POST',
//   }).then(async r => {
//     let data = await r.json()
//     setPhoto(data.url);
//   }).catch(err => console.log(err))
// }
