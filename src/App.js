import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import News from './Components/News';
import Posts from './Components/Posts';
import Products from './Components/Products';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<News/>}/>
          <Route path='/posts' element={<Posts/>}/>
          <Route path='/products' element={<Products/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
