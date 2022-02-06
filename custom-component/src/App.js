import './App.scss';
import Modal from './component/Modal';
import Toggle from './component/Toggle';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Wanted Pre-Onboarding Course</h1>
      </header>
      <main>
        <Modal />
        <Toggle />
      </main>
    </div>
  );
}

export default App;
