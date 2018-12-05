import React from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

const OfflineNoticeBar = props => (
    <View style = { styles.container }>
        <Text style = { styles.text }>No tiene conexión a internet</Text>
    </View>
);
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#b52424',
        height: 30,
        width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff'
    }
    
})

export default OfflineNoticeBar;
