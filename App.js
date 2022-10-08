import * as React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { WebView } from "react-native-webview";



export default class App extends React.Component {

  render() {
    return (
      
      <WebView source = {{uri:"https://www.fotos.live/"}} 
       style = {{ marginTop : 35 }} 
       allowsBackForwardNavigationGestures = {true}
    />

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
