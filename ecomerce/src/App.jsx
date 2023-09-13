import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
//import CardContext from './context/CardContext'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'




function App() {
  return (
      <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element={<ItemListContainer categoria={null} /> }/>
            <Route path='/categoria/remeras' element={<ItemListContainer categoria="remeras"/> }/>
            <Route path='/categoria/gorras' element={<ItemListContainer categoria="gorras" /> }/>
            <Route path='/categoria/pantalones' element={<ItemListContainer categoria="pantalones" /> }/>
            <Route path='/categoria/buzos' element={<ItemListContainer categoria="buzos" />  }/>
            <Route path='/detalle/id/:id' element={<ItemDetailContainer /> }/>
          </Routes>
      </BrowserRouter>
    )
}

export default App
