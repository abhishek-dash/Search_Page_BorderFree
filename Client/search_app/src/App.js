import './App.css';
import Body from './Component/Body'

function App() {
  return (
    <>
    <div className="app">
    <div className="nav">
      <img src="images/logo.jpg" alt="" className="logo" />
      <h4>Search Engine</h4>
    </div>
    <Body className='body'/>
    </div>
    </>
  );
}

export default App;
