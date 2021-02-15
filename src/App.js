import React, {Component} from 'react';
import Form from './components/Form';
import ListItem from './components/ListItem';
import {Container} from 'reactstrap';

class App extends Component {
  state = {
    tasks: [
      {text: 'buy bread', id: 1},
      {text: 'go to school', id: 2},
      {text: 'finish homework', id: 3},
      ],
    text: '',
  }

  inputChangeHandler = (e) => {
    this.setState({
      ...this.state,
      text: e.target.value,
    })
  }
  
  addTask = () => {
    const tasks = [...this.state.tasks];
    const newTask = {text: this.state.text, id: this.state.tasks.length + 1};
    tasks.push(newTask);
    this.setState({
      ...this.state,
      tasks: tasks,
    });
  }

  removeTask = (index) => {
    const tasks = [...this.state.tasks];
    tasks.splice(index, 1);
    this.setState({
      ...this.state,
      tasks: tasks,
    });
  }
  render() {
    return (
      <Container>
        <Form click={this.addTask} change={this.inputChangeHandler} btnText="Add"/>
        <ListItem remove={this.removeTask} tasks={this.state.tasks}/>
      </Container>
    );
  }
}

export default App;
