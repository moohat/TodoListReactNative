/* eslint-disable no-alert */
import React, {Component} from 'react';
import {
  Container,
  Content,
  Text,
  Form,
  Item,
  Label,
  Input,
  Button,
} from 'native-base';
import {StyleSheet} from 'react-native';
import axios from 'axios';

import {API_URL} from '../constants'

export default class TodosCreate extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }
  handleSubmit() {
    const text = this.state.text;
    const {goBack} = this.props.navigation;
    if(text){

      axios
        .post(`${API_URL}/todos`, {
          name: text,
        })
        .then(result => {
          goBack();
        });
    }else{
      alert('input boleh kosong, masukan todo')
    }
  }
  render() {
    return (
      <Container style ={{backgroundColor: '#FFF'}}>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Not Todo</Label>
              <Input onChangeText={text => this.setState({text})} />
            </Item>
          </Form>
        </Content>
            <Button full primary onPress={() => this.handleSubmit()} style={styles.btnFooter}>
              <Text>Submit</Text>
            </Button>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  btnFooter: {
    position:'absolute', bottom: 0, left:0, right:0
  }

})