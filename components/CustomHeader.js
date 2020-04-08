import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CustomHeader = ({ navigation, title }) => (
    <SafeAreaView style={style.container}>
        <View style={style.view}>
           {navigation.toggleDrawer instanceof Function ? 
           <TouchableOpacity  onPress={() => navigation.toggleDrawer()} >
                <Ionicons
                    name="md-menu"
                    color="white"
                    size={30}
                    style={style.menuIcon}                   
                />
            </TouchableOpacity>
            : 
            <TouchableOpacity  onPress={() => navigation.goBack()} >
                <Ionicons
                    name="ios-arrow-back"
                    color="white"
                    size={30}
                    style={style.menuIcon}                   
                />
            </TouchableOpacity>}
        </View>
        <View style={{flex: 1.5, justifyContent: 'center'}}>
            <Text style={{textAlign: 'center', color: "white" }}>{title}</Text>
        </View>
        <View style={{flex: 1}}></View>
    </SafeAreaView>
);

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 50,
        backgroundColor: '#223843'
    },
    view: {
        flex: 1,
        justifyContent: 'center',
    },
    menuIcon: {
        marginLeft: 10,
    }
});

export default CustomHeader;
