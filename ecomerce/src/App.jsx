import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer'
// import Productos from './components/Productos';
// import Footer from './components/Footer';

import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header></Header>
      <ItemListContainer greeting='Soy un mensaje'></ItemListContainer> 
      {/* <Productos></Productos>
      <Footer></Footer> */}
    </div>
  )
}

export default App
