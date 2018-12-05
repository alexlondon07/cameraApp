import React, { Component } from 'react'
import { Text, View , Button, Image} from 'react-native'
import OfflineNotice from './offline-notice';

export default class HomeScene extends Component {
    state = { result: {}, show: false };
    onResult = data => {
        this.setState({
            result: data
        });
        console.log(data);
    }
    render() {
        const { navigation } = this.props;
        return (
        <View>
            <Text> Hola </Text>
            <Button title="Abrir Camara" 
                onPress={ ()=> navigation.navigate('CameraScreen', { onResult: this.onResult }) } />

            <View>
                <OfflineNotice/>
                <Image
                    style={{width: 224, height: 300, resizeMode: 'contain'}}
                    source={{
                        uri: this.state.result.base64 ? 'data:image/png;base64,' + this.state.result.base64: 'https://facebook.github.io/react-native/docs/assets/favicon.png'  
                    }}
                />
                {/* {
                    imageUri = this.state.result.uri ? this.state.result.uri: '../assest/image.png';
                }
                <Image
                    style={{width: 224, height: 300, resizeMode: 'contain'}}
                    source={{
                        require(imageUri)
                    }}
                /> */}
            </View> 

        </View>
        )
    }
}