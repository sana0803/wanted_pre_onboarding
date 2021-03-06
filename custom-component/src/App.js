import './App.scss';
import Modal from './component/Modal';
import Toggle from './component/Toggle';
import Tab from './component/Tab';
import ClickToEdit from './component/ClickToEdit';
import AutoComplete from './component/AutoComplete';
import Tag from './component/Tag';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Wanted Pre-Onboarding Course</h1>
      </header>
      <main>
        <Modal />
        <Toggle />
        <Tab />
        <ClickToEdit />
        <AutoComplete />
        <Tag />
      </main>
    </div>
  );
}

export default App;
