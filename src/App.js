import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import Index from './PAGES';
import Article from './PAGES/Article';
import Add from './PAGES/Add';

function App() {
  return (
   <Routes>
    <Route path="/" element={<Navigation />}>
        <Route index element={<Index/>}/>
        <Route path="/articles" element={<Article/>} />
        <Route path="/article/:id" element={''} />
        <Route path="/add" element={<Add/>} />
        <Route path="/" element={''} />
        <Route path="/" element={''} />
    </Route>
   </Routes>
  );
}

export default App;
