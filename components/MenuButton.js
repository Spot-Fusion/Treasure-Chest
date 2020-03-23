import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MenuButton = ({ navigation }) => (
    <Ionicons
        name="md-menu"
        color="#000000"
        size={32}
        style={style.menuIcon}
        onPress={() => navigation.toggleDrawer()}
    />
);

const style = StyleSheet.create({
    menuIcon: {
        zIndex: 9,
        position: 'absolute',
        top: 40,
        left: 20
    }
});

export default MenuButton;
