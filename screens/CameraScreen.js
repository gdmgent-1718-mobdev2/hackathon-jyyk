import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Camera, Permissions } from 'expo';

export default class CameraScreen extends Component{
  constructor(props){
    super(props);

    this.state = ({
      hasCameraPermission: null,
      type: Camera.Constants.Type.back,
    });
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} 
          type={this.state.type} 
          autoFocus={Camera.Constants.AutoFocus.on} 
          whiteBalance={Camera.Constants.WhiteBalance.auto}
          ratio='16:9'
          onBarCodeRead={barCode => {
            alert(barCode.data);
          }}>
          </Camera>
        </View>
      );
    }
  }

}