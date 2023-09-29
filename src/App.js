
import { useEffect } from 'react';
import Home from './components/Home';
import store from './redux/store/store';
import { Provider } from 'react-redux';
import api_fetch from './apiFetchings/api_fetch';
import Navbar from './components/Navbar';
import {Routes,Route,Link} from 'react-router-dom'
import Details from './components/Details';
function App() {
useEffect(()=>{
  api_fetch();
})

  return (

    <>
    <Provider store={store}>
    <Navbar />
    <Routes>
     
      <Route path='/' element={ <Home />} />
      <Route path='/:id' element={<Details/>} />
   
    </Routes>
    </Provider> 
    </>
  );
}

export default App;
