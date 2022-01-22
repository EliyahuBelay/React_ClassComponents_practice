import logo from './logo.svg';
import './App.css';
import EditSeason from './Components/EditSeason/EditSeason';
import AddSeason from './Components/AddSeason/AddSeason';
import Show from './Components/Show/Show';
import Season from './Components/Season/Season';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className='headLineComponent'>Show Component</p>
        <Show rating={8} showName="naruto" year={2016}/>
        <hr/>
        <p className='headLineComponent'>Season Component</p>
        <Season/>
        <hr/>
        <p className='headLineComponent'>Add Season Component</p>
        <AddSeason/>
        <hr/>
        <p className='headLineComponent'>Edit Season Component</p>
        <EditSeason/>  
      </header>
    </div>
  );
}

export default App;
