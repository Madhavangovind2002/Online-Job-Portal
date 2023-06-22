import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './pages/home/Home';
import List from './pages/list/List';
import Jobs from './pages/jobs/Jobs';
import Login from './pages/Login/Login';
import Register from './pages/register/Register';
import Apply from './pages/apply/Apply';
import Addjob from './pages/addjob/Addjob';
function App() {
  return (
    <div className='app'>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/jobs' element={<List/>}/>
      <Route path='jobs/:id' element={<Jobs/>}/>
      <Route path ='/Login' element={<Login/>}/>
      <Route path ='/Register' element={<Register/>}/>
      <Route path='/Apply' element={<Apply/>}/>
      <Route path='/Addjob' element={<Addjob/>}/>
    </Routes>
    </BrowserRouter>
  </div>
  );
} 

export default App;
