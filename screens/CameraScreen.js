import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Camera, Permissions } from 'expo';

export default class CameraScreen extends Component{
  constructor(props){
    super(props);

    this.state = ({
      hasCameraPermission: null,
      type: Camera.Constants.Type.back,
      autoFocus: Camera.Constants.AutoFocus.on,
      whiteBalance: Camera.Constants.WhiteBalance.auto,
      ratio: '16:9',
      barCodeDetected: false
    });
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  handleCloseModal() {
    this.setState({ barCodeDetected: false });
  }

  onBarCodeRead(barCode) {
    this.props.navigation.navigate('ScanInfo', {barCode: barCode, closeModal: () => this.handleCloseModal()});
    this.setState({ barCodeDetected: true });
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null || this.state.barCodeDetected) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
          <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} 
          type={this.state.type} 
          autoFocus={this.state.autoFocus} 
          whiteBalance={this.state.whiteBalance}
          ratio={this.state.ratio}
          barCodeTypes={[Camera.Constants.BarCodeType.qr]}
          onBarCodeRead={this.onBarCodeRead.bind(this)}>
          </Camera>
        </View>
      );
    }
  }

}