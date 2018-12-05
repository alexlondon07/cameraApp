import React, { Component } from 'react';
import { View, Image, Button, CameraRoll, ScrollView, StyleSheet, PermissionsAndroid } from 'react-native';

 class CameraRollScene extends Component {
  
    state={
        photos: []
    }

    componentDidMount () {
        this.requestCameraRollPermission();
    }

    async requestCameraRollPermission(){
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE, {
                    title: 'Acceso al storage',
                    message: 'Permiso de acceso a tu albúm de fotos'
                }
            );

            if( granted ==  PermissionsAndroid.RESULTS.GRANTED ){
                console.log('permiso otorgao')
            }else{
                console.log('permiso no otorgao')
            }

        } catch (error) {
            console.warn(error);
        }
    }

    showGalleryImages = () => {
        CameraRoll.getPhotos({
            first: 10,
            assetType: 'Photos'
        })
        .then(r=>{
            this.setState({photos : r.edges})
        })
        .catch(err => console.log(err));
    }

    render() {
        return (
        <View>
            <Button 
                title= "Cargar Imagenes de Galeria"
                onPress = {this.showGalleryImages}
            />
            <ScrollView>
                {
                    this.state.photos.map( (value, key) => {
                        return(
                            <Image
                                key={ key }
                                style={ styles.imageSize } 
                                source = {{ uri: value.node.image.uri }}
                            />
                        )
                    })
                }
            </ScrollView>
        </View>
        );
    }
}
const styles = StyleSheet.create({
    imageSize: {
        width: 400,
        height: 200
    }
})

export default CameraRollScene