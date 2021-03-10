import './index.scss';
import ListComponent from './components/ListComponent';
import InputComponent from './components/InputComponent';

function App() {
  return (
    <div className="container">
      <h1>To Do List App</h1>
      <InputComponent />
      <ListComponent />
      <ListComponent />
    </div>
  );
}

export default App;
