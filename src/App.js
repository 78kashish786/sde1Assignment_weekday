import './App.css';
import HeaderComponent from './componnts/HeaderComponent';
import Sidebar from './componnts/Sidebar';

function App() {
  return (
    <div className="App flex grid grid-cols-12 ">
      <Sidebar imgsrc={require('./Assets/logo1.png')}/>
      <div className='col-span-10'>
        <HeaderComponent/>
      </div>
      <Sidebar imgsrc={require('./Assets/logo2.jpeg')}/>
    </div>
  );
}

export default App;
