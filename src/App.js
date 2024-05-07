
import './App.css';
import HeaderComponent from './componnts/HeaderComponent';
import Sidebar from './componnts/Sidebar';

import Main from './componnts/Main';





function App() {

 


  return (
    <div className="App flex grid grid-cols-12 ">
      <Sidebar imgsrc={require('./Assets/logo1.png')}/>
      <div className='col-span-12 md:col-span-10'>
        <HeaderComponent/> 
        <NoticeComp/>
        <Main/>

      </div>
      <Sidebar color={'bg-cyan-200'} imgsrc={require('./Assets/logo2.jpeg')}/>
    </div>
  );
}

function NoticeComp(){
  return(
    <div className='p-1 rounded-full bg-green-200 text-sm px-2 font-semibold m-5 text-center w-[82%]'>
          <h1>We, at Weekday, are creating a go-to hub for uncovering the real issues candidates should be aware of before joining a company. Access 150+ company reviews here</h1>
          </div>
  )
}
export default App;
