/* eslint-disable react/no-did-mount-set-state */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Body, ListItem, CheckBox, Left, Right, Text, View, Button, Icon, SwipeRow } from 'native-base';
import propTypes from 'prop-types';
import axios from 'axios';
// import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';
import {API_URL} from '../constants'


export default class TodoItem extends Component {

  state = {
    isDone: false
  }
  componentDidMount() {
    const { todo: { isDone } } = this.props;

    this.setState({ isDone: Boolean(isDone) })
  }

  handleDone() {
    const { todo: { id } } = this.props; //es6 helper
    this.setState({
      isDone: !this.state.isDone,
    })

    axios.patch(`${API_URL}/todos/${id}`, {
      isDone: this.state.isDone ? 0 : 1,
    })

  }
  handleDelete(id){
    alert(`data id: ${id} akan dihapus`);
    axios.delete(`${API_URL}/todos/${id}`)
  }
  render() {
    const { todo: { id, name } } = this.props; //es6 helper


    return (
     
<SwipeRow
rightOpenValue={-75}

body={
  <View style={{flexDirection: 'row'}}>
    <View style={{marginHorizontal: 20}}>

          <CheckBox checked={this.state.isDone} onPress={() => this.handleDone()} />
    </View>
    <View>

    <Text>{name}</Text>
    </View>

  </View>
}
right={
  <Button danger onPress={() => this.handleDelete(id)}>
    <Icon active name="trash" />
  </Button>
}
/>


      
      
    );
  }
}

TodoItem.propTypes = {
  todo: propTypes.object.isRequired,
};
