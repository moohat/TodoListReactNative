// import {createStackNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Todos from './screens/Todos';
import TodosCreate from './screens/TodosCreate';

const screens = {
  Todos: {
    screen: Todos,
    navigationOptions: {
      headerTitle: 'Not To Do List',
      headerStyle: {backgroundColor: 'red'},
    },
  },
  TodosCreate: {
    screen: TodosCreate,
    navigationOptions: {
      headerTitle: 'Not To Do List',
      headerStyle: {backgroundColor: 'red'},
    },
  },
};

const App = createStackNavigator(screens);

export default createAppContainer(App);
