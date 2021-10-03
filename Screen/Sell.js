import React, { Component } from 'react';
import { Text,
        View,
        StyleSheet,
        Button,
        TouchableOpacity,
        Image } from 'react-native';
import Constants from 'expo-constants';
import { BarCodeScanner } from 'expo-barcode-scanner'
import * as Permissions from 'expo-permissions' 

export default class Sell extends Component {
constructor(){
    super()
    this.state={
        hasCameraPermissions:null,
        scanned:false,
        scannedData:"",
        buttonState: "normal"
    }
} 
getCameraPermision=async()=>{
    const{status}=await Permissions.askAsync(Permissions.CAMERA)
    this.setstate({
        hasCameraPermissions:status==="granted",
        buttonState: "clicked",
    })
}
handleBarCodeScanner=async({type,data})=>{
this.setState({
    buttonState:'normal',
    scanned:true,
    scannedData:data
})
}
  render() {
  const scanned=this.state.scanned;
  const buttonState=this.state.buttonState
  const hasCameraPermissions = this.state.hascamerapermmissions
  if(buttonState==='clicked' && hasCameraPermissions===true){
        return(
            <BarCodeScanner
            onBarCodeScanned={
                scanned?undefined:this.handleBarCodeScanner
            }
            />
        )
  }
  else if(this.state.buttonState==='normal'){

  
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text>
        {hasCameraPermissions===true?this.state.scannedData:"Request camera permission"}
        </Text>
        <Image
                source={require("../assets/scan.jpg")}
                style={ss.img}/>
        <TouchableOpacity style={ss.scan} onpress={this.getCameraPermision}>
        <Text> Scan QR code </Text>
        </TouchableOpacity>
        </View>
    )
  }

}
}
const ss = StyleSheet.create({
scan:{
backgroundColor:'red',
alignItems:'center',
justifyContent:'center',
marginTop:100,
height:50,
width:100
},
img:{
marginTop:100,
width:200,
height: 200
}
})