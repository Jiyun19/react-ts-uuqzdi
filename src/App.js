import React, {Component} from 'react';
import Taskspage from './components/TasksPage';

const mockTasks = [
  {
    id: 1,
    title: 'Learn Redux',
    description : 'No big deal.',
    status: 'In Progress',
  },
  {
    id: 2,
    title: 'Peace on Earth',
    description: 'No big deal.',
    status: 'In Progress',
  },
];

class App extends Component {
  render(){
    return (
    <div className="main-content">
      <TasksPage tasks={mockTasks} />
    </div>
    );

  }
}

export default App;