import './App.css';
import ToDoContainer from './components/containers/ToDoContainer';
import ToDoFormContainer from './components/containers/ToDoFormContainer';
import FilterOptions from './components/pure/FilterOptions';

function App() {
  return (
    <div className="App">
      <ToDoContainer />
      <ToDoFormContainer />
      <FilterOptions />
    </div>
  );
}

export default App;
