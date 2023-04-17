import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/*' element={<NotFoundPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
