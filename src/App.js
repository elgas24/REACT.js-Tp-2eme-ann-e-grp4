import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import Index from './PAGES';
import Article from './PAGES/Articles';
import Add from './PAGES/Add';
import Page from './PAGES/Page';

function App() {
  return (
   <Routes>
    <Route path="/" element={<Navigation />}>
        <Route index element={<Index/>}/>
        <Route path="/articles" element={<Article/>} />
        <Route path="/article/:id" element={<Page/>} />
        <Route path="/add" element={<Add/>} />
        <Route path="/" element={''} />
        <Route path="/" element={''} />
    </Route>
   </Routes>
  );
}

export default App;
