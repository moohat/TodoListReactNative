import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Header extends Component {
  render() {
    // const color = this.props.backgroundColor;
    // const title = this.props.title;

    // const {color, title} = this.props;
    return (
      <View style={styles.container}>
        <Text> Header</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
