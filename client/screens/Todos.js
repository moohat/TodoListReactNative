/* eslint-disable no-alert */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {
  Container,
  Content,
  List,
  Fab,
  Icon,
} from 'native-base';
import TodoItem from '../components/TodoItem';
import axios from 'axios';

export default class Todos extends Component {
  constructor(){
    super();
  this.state = {
    todos:[],
  };
  }
  
componentDidMount(){
  const self = this;
  //gunakan ip addres dengan cara ketik ifconfig, setup konfigurasi ip nya juga di lumen,( php -S localhost:8000 -t public) localhostnya diganti jadi 10.141.19.60:8000
  // untuk tahu ip 10.141.19.60 ketik ifconfig di terminal, catatan: ip berubah2 setiap jaringan direset / komputer mati
  axios.get('http://10.138.108.193:8080/api/todos').then((result) =>{
       self.setState({
      todos: result.data,
    });
  });
}
  _keyExtractor = (item,index) => item.id;

 


  render() {
    return (
      <Container>
       
        <Content>
          <List>
          <FlatList
        data={this.state.todos}
        keyExtractor={this._keyExtractor}
        renderItem={({ item }) => <TodoItem todo={item} />}
      />
            {/* {this.state.todos.map((todo) => <TodoItem todo={todo}/>)} */}
            
          </List>
        </Content>
        <Fab
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.props.navigation.navigate('TodosCreate')}>
            <Icon name="add" />            
          </Fab>
      </Container>
    );
  }
}
