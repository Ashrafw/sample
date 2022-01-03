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
                    <NavLink to='/sample'>Home</NavLink>
                    <NavLink to='/sample/about'>About</NavLink>
                    <NavLink to='/sample/contact'>Contact</NavLink>
                </nav>
                <Routes>
                    <Route path='/sample/' />
                    <Route path='/sample/about' element={<About />} />
                    <Route path='/sample/contact' element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
