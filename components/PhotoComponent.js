import React, { Component } from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';

const width = Dimensions.get('window').width;
const largeContainerSize = width / 2;
const largeImageSize = width / 4;
const styles = StyleSheet.create({

    container: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10
    },
    containerSize: {
        width: largeContainerSize,
        height: largeContainerSize,
        alignItems: 'center',
        justifyContent: 'center',
        tintColor: 'grey'
    },
    imageSize: {
        width: largeImageSize,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute'
    },
})
const PhotoComponent = () => {

        return (
            <View style={styles.container}>
                <Image
                resizeMode='contain'
                style={styles.containerSize}
                source={require('../resources/background.png')}
                />
                <Image
                resizeMode='contain'
                style={styles.imageSize}
                source={require('../resources/camera.png')}
                />
            </View>
        )
    }

export default PhotoComponent;
