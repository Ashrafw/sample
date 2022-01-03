import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';

function App() {
    return (
        <div className='App'>
            <h1>Main Page</h1>
            <BrowserRouter>
                <nav>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                </nav>
                <Routes>
                    <Route path='/' />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
