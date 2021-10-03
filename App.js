import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import Sell from './Screen/Sell';

export default class App extends Component {
  render() {
    return (
        <Sell />
    )
  }
}